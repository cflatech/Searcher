import { SearchResult } from "$/types/sites";
import { drive_v3, google } from "googleapis";
import { depend } from "velona";
import { DateTime } from "luxon";
import { GOOGLE_DRIVE_CREDENTIAL } from "$/service/envValues";
import { PER_PAGE } from "./const";
import { GaxiosResponse } from "gaxios";

const urlPrefix = "https://drive.google.com/file/d/";

const getFileInformations = async (
  query: string,
  page: number
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

  const response = await getFileList(query, page, drive);
  if (!response) {
    return null;
  }

  if (!response.data.files) {
    return null;
  }

  return response.data.files;
};

const getFileList = async (
  query: string,
  page: number,
  drive: drive_v3.Drive,
  currentPage: number = 1,
  nextPageToken: string = ""
): Promise<GaxiosResponse<drive_v3.Schema$FileList> | null> => {
  const response = await drive.files.list({
    q: "fullText contains '" + query + "'",
    pageSize: PER_PAGE,
    pageToken: nextPageToken,
    fields: "files(id, name, modifiedTime), nextPageToken",
  });

  if (page === currentPage) {
    return response;
  }

  if (!response.data.nextPageToken) {
    return null;
  }

  return getFileList(
    query,
    page,
    drive,
    currentPage + 1,
    response.data.nextPageToken
  );
};

export const search = depend(
  {
    getFileInformations: getFileInformations as (
      query: string,
      page: number
    ) => Promise<drive_v3.Schema$File[]>,
  },
  async (
    { getFileInformations },
    query: string,
    page: number
  ): Promise<SearchResult[]> => {
    const files = await getFileInformations(query, page);
    if (!files) {
      return [];
    }

    return files.map((file) => {
      return {
        text: file.name ?? "no name",
        link: urlPrefix + file.id,
        timestamp: DateTime.fromISO(file.modifiedTime ?? "").toFormat(
          "yyyy-MM-dd HH:mm:ss"
        ),
      };
    });
  }
);
