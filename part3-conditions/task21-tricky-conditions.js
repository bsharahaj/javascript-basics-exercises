// Task 21: Predict the output — tricky conditions

const x = 5;

console.log(x > 3 && x < 10 ? "in range" : "out");  // "in range"
                                                    // 5>3 true, 5<10 true → "in range"

console.log(!!(0));                                 // false
                                                    // !! converts any value to its boolean form.
                                                    // 0 is falsy → false.

console.log(!!("hello"));                           // true
                                                    // "hello" is truthy → true.

console.log(x === 5 || x === 10 ? "match" : "no");  // "match"
                                                    // x === 5 is true; OR short-circuits → "match"
