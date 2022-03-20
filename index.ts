import camelCaseKeys from "./src/camelcase-keys";
import cleanValues from "./src/clean-values/cleanValues";
import pick from "./src/pick";
import snakeCaseKeys from "./src/snakecase-keys";

/**
 *
 * Picks key-value pairs from an object and creates new object out of it
 *
 * @example
 * const o = {
 *    prop1: 1,
 *    prop2: 2,
 *    prop3: 3,
 * };
 *
 */
const picked = pick({ prop1: 1, prop2: 2, prop3: 3 }, "prop1");
console.log(picked.prop1);

const camelized = camelCaseKeys({
  aa_aa: { bb_bb: [{ cc_cc: "" }, { dd_dd: { ee_ee: "", ff_ff: "" } }] },
});

console.log(camelized);
console.log(snakeCaseKeys(camelized));
console.log(cleanValues(camelized));
