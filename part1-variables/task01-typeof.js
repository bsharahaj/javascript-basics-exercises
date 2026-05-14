// Task 1: Predict the output — typeof quiz
// typeof always returns a STRING describing the type.

console.log(typeof 42);          // "number"
console.log(typeof "42");        // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"  ← famous JavaScript quirk! null is actually a primitive,
                                 //   but typeof null returns "object" due to a bug from JS 1995 that
                                 //   was never fixed for backward compatibility.
console.log(typeof {});          // "object"
