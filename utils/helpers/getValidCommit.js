import { USE_SPECFIC } from "../constants.js";

const getValidCommit = (data) => {
  return data.find(
    (e) =>
      e.commit.author.email === USE_SPECFIC.AUTHOR_EMAIL &&
      USE_SPECFIC.CONDITION.test(e.commit.message)
  );
};

export default getValidCommit;
