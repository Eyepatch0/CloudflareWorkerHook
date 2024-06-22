import { GITHUB_CONSTANTS } from "./utils/constants.js";
import updateValidCommit from "./functions/updateValidCommit.js";
import sendUpdate from "./functions/sendUpdate.js";
import { getCommitData } from "./utils/value.js";

async function main() {
  const baseURL = `https://api.github.com/repos/${GITHUB_CONSTANTS.GITHUB_REPO_OWNER}/${GITHUB_CONSTANTS.GITHUB_REPO_NAME}/commits`;
  const headers = {
    Accept: "application/vnd.github.v3+json",
  };

  try {
    const checkUpdate = await updateValidCommit(baseURL, headers);

    if (checkUpdate) {
      await sendUpdate(getCommitData().commit.message);
    }

    return;
  } catch (error) {
    console.log(error);
  }
}

main();

