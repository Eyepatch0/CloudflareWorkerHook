import { getValue } from "./utils/value.js";
import { GITHUB_CONSTANTS } from "./utils/constants.js";

import sendUpdate from "./functions/sendUpdate.js";
import formatText from "./utils/helpers/formatText.js";
import updateValidCommit from "./functions/updateValidCommit.js";

async function main() {
  try {
    const baseURL = `https://api.github.com/repos/${GITHUB_CONSTANTS.GITHUB_REPO_OWNER}/${GITHUB_CONSTANTS.GITHUB_REPO_NAME}/commits`;
    const headers = {
      Accept: "application/vnd.github.v3+json",
    };

    const checkForUpdate = await updateValidCommit(baseURL, headers);

    if (checkForUpdate) {
      const message = formatText(
        getValue("LAST_VALID_COMMIT_DATA").commit.message
      );

      await sendUpdate(message);
    }

    return;
  } catch (error) {
    console.error(error);
  }
}

main();
