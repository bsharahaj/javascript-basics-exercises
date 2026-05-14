// Task 5: Type coercion trap — == vs ===
//
// == (loose equality)  → converts types before comparing
// === (strict equality) → no conversion; values AND types must match

console.log(0 == false);         // true   → false is coerced to 0, so 0 == 0
console.log(0 === false);        // false  → number vs boolean, different types
console.log("1" == 1);           // true   → "1" is coerced to number 1
console.log("1" === 1);          // false  → string vs number, different types
console.log("" == false);        // true   → both coerced to 0
console.log(null == undefined);  // true   → special rule: null and undefined are loosely equal
console.log(null === undefined); // false  → different types (object vs undefined)

// Rule of thumb: ALWAYS use === in real code to avoid surprises.
