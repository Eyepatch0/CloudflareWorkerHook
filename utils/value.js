let LAST_VALID_COMMIT = "";

let VALID_COMMIT_DATA = "";

export const getLastValidCommit = () => LAST_VALID_COMMIT;
export const setLastValidCommit = (value) => {
  LAST_VALID_COMMIT = value;
};

export const getCommitData = () => VALID_COMMIT_DATA;
export const setCommitData = (value) => {
  VALID_COMMIT_DATA = value;
};
