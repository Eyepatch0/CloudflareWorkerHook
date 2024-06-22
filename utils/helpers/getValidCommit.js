import { FILTER_CONDITION_REGEX } from "../constants.js";

const getValidCommit = (data) => {
  return data.find((e) => FILTER_CONDITION_REGEX.test(e.commit.message));
};

export default getValidCommit;
