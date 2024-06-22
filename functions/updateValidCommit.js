import axios from "axios";

import { getValue, setValue } from "../utils/value.js";
import getValidCommit from "../utils/helpers/getValidCommit.js";

async function updateValidCommit(url, headers) {
  try {
    const { data } = await axios.get(url, { headers });

    const latestValidCommit = getValidCommit(data);
    const latestValidCommitSha = latestValidCommit?.sha;

    if (getValue("LAST_VALID_COMMIT") !== latestValidCommitSha) {
      setValue("LAST_VALID_COMMIT", latestValidCommitSha);
      setValue("LAST_VALID_COMMIT_DATA", latestValidCommit);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Failed to obtain valid commit: ${error}`);
    return false;
  }
}

export default updateValidCommit;
