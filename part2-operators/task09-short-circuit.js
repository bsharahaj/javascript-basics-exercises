// Task 9: Short-circuit evaluation
//
// && stops at the first FALSY value (or returns the last if all truthy)
// || stops at the first TRUTHY value (or returns the last if all falsy)
// ?? returns the right side only if left is null or undefined

console.log(true && "hello");       // "hello"      → left is truthy, returns right side
console.log(false && "hello");      // false        → left is falsy, stops immediately
console.log(0 || "default");        // "default"    → 0 is falsy, moves to right side
console.log("value" || "default");  // "value"      → left is truthy, stops
console.log(null ?? "fallback");    // "fallback"   → left is null, uses fallback
