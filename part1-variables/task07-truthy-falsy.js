// Task 7: Truthy and falsy values
//
// In JavaScript there are only 6 FALSY values:
//   false, 0, "", null, undefined, NaN
// Everything else is truthy (including empty arrays [] and empty objects {}).
//
// Answer table:
//   Value        | Truthy or Falsy?
//   -------------|------------------
//   "hello"      | TRUTHY
//   ""           | FALSY
//   0            | FALSY
//   1            | TRUTHY
//   null         | FALSY
//   undefined    | FALSY
//   false        | FALSY
//   []           | TRUTHY  (yes, empty array is truthy!)
//   NaN          | FALSY

// Verification using the !! trick (converts any value to its boolean form):
console.log(!!"hello");     // true
console.log(!!"");          // false
console.log(!!0);           // false
console.log(!!1);           // true
console.log(!!null);        // false
console.log(!!undefined);   // false
console.log(!!false);       // false
console.log(!![]);          // true   ← surprising!
console.log(!!NaN);         // false
