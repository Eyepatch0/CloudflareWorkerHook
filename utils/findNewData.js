const findNewData = (prev, next) => {
  const oldShas = new Set(prev.map((e) => e.sha));
  return next.filter((e) => !oldShas.has(e.sha));
};

export default findNewData;
