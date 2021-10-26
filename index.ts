const isPlainObject = (subject: any): subject is Record<string, any> =>
  Object(subject) === subject &&
  Object.prototype.toString.call(subject) === '[object Object]';

const snakeCase = (subject: string) => {
  // Object keys might also be a Symbol or number
  if (typeof subject === 'string')
    return subject.replace(/\B[A-Z][a-z]/g, (m) => `_${m.toLowerCase()}`);

  return subject;
};

const snakeCaseKeys = (subject: any): any => {
  if (Array.isArray(subject)) return subject.map(snakeCaseKeys);

  if (isPlainObject(subject)) {
    const o: Record<string, any> = {};

    for (const [k, v] of Object.entries(subject)) {
      o[snakeCase(k)] = snakeCaseKeys(v);
    }

    return o;
  }

  return subject;
};

export default snakeCaseKeys;
