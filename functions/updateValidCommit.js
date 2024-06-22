import axios from "axios";

import {
  getLastValidCommit,
  setLastValidCommit,
  setCommitData,
} from "../utils/value.js";
import getValidCommit from "../utils/helpers/getValidCommit.js";

async function updateValidCommit(url, headers) {
  try {
    const { data } = await axios.get(url, { headers });

    const latestValidCommit = getValidCommit(data);
    const latestValidCommitSha = latestValidCommit?.sha;

    if (getLastValidCommit() !== latestValidCommitSha) {
      setLastValidCommit(latestValidCommitSha);
      setCommitData(latestValidCommit);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error: ${error}`);
    return false;
  }
}

export default updateValidCommit;
