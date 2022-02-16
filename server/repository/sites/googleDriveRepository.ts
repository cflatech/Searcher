import { SearchResult } from "$/types/sites";
import { drive_v3, google } from "googleapis";
import { depend } from "velona";
import { DateTime } from "luxon";
import { GOOGLE_DRIVE_CREDENTIAL } from "$/service/envValues";

const urlPrefix = "https://drive.google.com/file/d/";

const getFileInformations = async (
  query: string
): Promise<drive_v3.Schema$File[] | null> => {
  const jwtAuth = new google.auth.JWT({
    keyFile: GOOGLE_DRIVE_CREDENTIAL,
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  await jwtAuth.authorize();
  const drive = google.drive({
    version: "v3",
    auth: jwtAuth,
  });

  const response = await drive.files.list({
    q: "fullText contains '" + query + "'",
    fields: "files(id, name, modifiedTime)",
  });

  if (!response.data.files) {
    return null;
  }
  return response.data.files;
};

export const search = depend(
  {
    getFileInformations: getFileInformations as (
      query: string
    ) => Promise<drive_v3.Schema$File[]>,
  },
  async (
    { getFileInformations },
    query: string
  ): Promise<Array<SearchResult>> => {
    const files = await getFileInformations(query);
    if (!files) {
      return [];
    }

    return files.map((file) => {
      return {
        text: file.name ?? "no name",
        link: urlPrefix + file.id,
        timestamp: DateTime.fromISO(file.modifiedTime ?? ""),
      };
    });
  }
);
