import { FILTER_CONDITION_REGEX } from "../constants.js";

const formatText = (data) => {
  return data.replace(FILTER_CONDITION_REGEX, "");
};

export default formatText;
