import { defineController } from "./$relay";
import { search as slackSearch } from "$/repository/sites/slackRepository";

export default defineController(() => ({
  get: async ({ query }) => {
    const result = await slackSearch(query.query);
    return { status: 200, body: result };
  },
}));
