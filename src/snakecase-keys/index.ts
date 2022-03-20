const isPlainObject = (subject: any): subject is Record<string, any> =>
  Object(subject) === subject &&
  Object.prototype.toString.call(subject) === "[object Object]";

const snakeCase = (subject: string) => {
  // Object keys might also be a Symbol or number
  if (typeof subject === "string")
    return subject.replace(/\B[A-Z][a-z]/g, (m) => `_${m.toLowerCase()}`);

  return subject;
};

/**
 *
 * Changes keys of plain object from `camel-case` to `snake-case`.
 * Also, supports `array` of plain objects
 *
 * @example
 * const data = {
 *    firstName: 'john',
 *    lastName: 'doe',
 * };
 *
 * snakeCaseKeys(data); // { first_name: "john", last_name: "doe" }
 *
 */
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
