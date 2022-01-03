import { defineController } from "./$relay";

export default defineController(() => ({
  get: async () => {
    return { status: 200, body: "ok" };
  },
}));
