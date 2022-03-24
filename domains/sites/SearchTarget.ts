import { SearchTarget } from "$/types/sites";

export const getFormalTitle: (target: SearchTarget) => string = (
  target: SearchTarget
) => {
  switch (target) {
    case "slack":
      return "Slack";
    case "googledrive":
      return "Google Drive";
    case "qiita":
      return "Qiita";
    case "backlog":
      return "Backlog";
  }
};
