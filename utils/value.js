const store = {
  LAST_VALID_COMMIT: "",
  LAST_VALID_COMMIT_DATA: "",
};

export const getValue = (key) => store[key];

export const setValue = (key, value) => {
  store[key] = value;
};
