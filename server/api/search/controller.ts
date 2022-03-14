import { defineController } from "./$relay";
import getSearcher from "./searchTargetSelector";

export default defineController(() => ({
  get: async ({ query }) => {
    const searcher = getSearcher(query.target);

    const result = await searcher(query.query, query.page);
    return { status: 200, body: result };
  },
}));
