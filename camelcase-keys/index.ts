const isPlainObject = (subject: any): subject is Record<string, any> =>
  Object(subject) === subject &&
  Object.prototype.toString.call(subject) === '[object Object]';

const camelize = (subject: string) => {
  // Object keys might also be a Symbol or number
  if (typeof subject === 'string')
    return subject.replace(/_[a-z]/g, (m) => m[1].toUpperCase());

  return subject;
};

const camelCaseKeys = (subject: any): any => {
  if (Array.isArray(subject)) return subject.map(camelCaseKeys);

  if (isPlainObject(subject)) {
    const o: Record<string, any> = {};

    for (const [k, v] of Object.entries(subject))
      o[camelize(k)] = camelCaseKeys(v);

    return o;
  }

  return subject;
};

export default camelCaseKeys;
