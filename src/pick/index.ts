type Dict = Record<string, any>;

const pick = <O extends Dict, K extends keyof O>(o: O, ...keys: K[]) => {
  const picked: { [I in K]?: O[I] } = {};

  for (const key of keys) {
    if (key in o) {
      picked[key] = o[key];
    }
  }

  return picked;
};

export default pick;
