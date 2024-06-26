import { DISCORD_CONSTANTS } from "./constants.js";

const threadEnabled = (env) => {
  if (DISCORD_CONSTANTS.THREAD_ID) {
    return `${env.DISCORD_WEBHOOK_URL}?thread_id=${DISCORD_CONSTANTS.THREAD_ID}`;
  } else {
    return `${env.DISCORD_WEBHOOK_URL}`;
  }
};

export default threadEnabled;
