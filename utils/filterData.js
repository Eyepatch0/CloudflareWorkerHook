import { FILTER_CONDITION_REGEX } from "./constants.js";

const filterData = (data) =>
  data
    .filter((e) => FILTER_CONDITION_REGEX.test(e.commit.message))
    .map((e) => ({
      sha: e.sha,
      commit: e.commit,
    }));

export default filterData;
