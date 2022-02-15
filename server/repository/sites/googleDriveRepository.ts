import { google, drive_v3, driveactivity_v2 } from "googleapis";
import { file } from "googleapis/build/src/apis/file";

export const search = async () => {
  const jwtAuth = new google.auth.JWT({
    keyFile: "./server/credentials/google.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });

  try {
    await jwtAuth.authorize();
    const drive = google.drive({
      version: "v3",
      auth: jwtAuth,
    });

    const response = await drive.files.list({
      q: "mimeType='image/jpeg'",
      fields: "files(id, name)",
    });

    const files = response?.data.files;
    console.log(response);
    console.log("Files:");
    console.log(files);
    if (files?.length) {
      files.map((file) => {
        console.log(`${file.name}`);
      });
    }
  } catch (e) {
    throw e;
  }
};
