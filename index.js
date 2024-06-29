import {
  getValue,
  updateValue,
  createKey,
  keyExists,
} from "./helpers/workersKV.js";

import sendUpdate from "./helpers/sendUpdate.js";
import getCommits from "./helpers/getCommits.js";
import findNewData from "./utils/findNewData.js";

async function handleScheduled(event, env) {
  try {
    const key = await keyExists(env);
    if (!key) {
      await createKey(env);
    }

    const baseURL = `https://api.github.com/repos/${env.GITHUB_REPO_OWNER}/${env.GITHUB_REPO_NAME}/commits`;
    let headers = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Cloudflare Worker",
    };

    if (env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer: ${env.GITHUB_TOKEN}`;
    }

    const getPreviousCommitsData = await getValue(env);
    const getCommitsData = await getCommits(baseURL, headers);

    if (getPreviousCommitsData.length === 0) {
      await updateValue(env, getCommitsData);
    }

    if (
      getPreviousCommitsData.length &&
      getCommitsData[0].sha !== getPreviousCommitsData[0].sha
    ) {
      const newData = findNewData(getPreviousCommitsData, getCommitsData);

      if (newData.length > 0) {
        await updateValue(env, getCommitsData);
        await Promise.all(
          newData.map((e) => sendUpdate(e.commit.message, env))
        );
      }
      return;
    }

    return;
  } catch (error) {
    console.error(error);
  }
}

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(handleScheduled(event, env));
  },
  async fetch(request, env, ctx) {
    return new Response("Working...");
  },
};
