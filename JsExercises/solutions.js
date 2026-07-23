/* =========================================================
   JS Weekend Exercises 1 — Solutions
   ========================================================= */


/* ---------------------------------------------------------
   BASIC
   --------------------------------------------------------- */

// Ex1.1 - Yes or No
// A boolean is already a condition — no need for `if (bool === true)`.
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}


/* ---------------------------------------------------------
   SIMPLE MATH
   --------------------------------------------------------- */

// Ex2.1 - Sum of lowest numbers
// Two traps: (1) .sort() with no comparator sorts as STRINGS, so [10, 9]
// stays [10, 9]. Always pass (a, b) => a - b for numbers.
// (2) .sort() mutates the array, so we copy with [...numbers] first.
function sumTwoSmallestNumbers(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}

// Ex2.2 - One and Zero (binary array -> integer)
// Horner's method: each step shifts what we have left one bit and adds the
// new digit. Works for any array length, no Math.pow needed.
function binaryArrayToNumber(arr) {
  return arr.reduce((acc, bit) => acc * 2 + bit, 0);
}

// Ex2.3 - Find the Next Perfect Square
// Number.isInteger on the square root is the perfect-square test.
function findNextSquare(sq) {
  const root = Math.sqrt(sq);
  return Number.isInteger(root) ? (root + 1) ** 2 : -1;
}

// Ex2.4 - Unique
// After sorting, the odd one out is either at the very front or the very back.
// If the first two match, the majority value is at the front -> answer is last.
function findUniq(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[0] === sorted[1] ? sorted[sorted.length - 1] : sorted[0];
}

// Ex2.5 - Summation
// Gauss's formula: O(1) instead of looping. A loop also works fine here.
function summation(num) {
  return (num * (num + 1)) / 2;
}

// Ex2.6 - Years and Centuries
// Math.ceil handles the boundary correctly: 2000/100 = 20 exactly, and
// 1601/100 = 16.01 -> 17.
function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

// Ex2.7 - Basic Math
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+": return value1 + value2;
    case "-": return value1 - value2;
    case "*": return value1 * value2;
    case "/": return value1 / value2;
    default:  return null;
  }
}


/* ---------------------------------------------------------
   MATH IN STORY
   --------------------------------------------------------- */

// Ex3.1 - Growth of population
// Math.floor each year because "number of inhabitants is an integer" — and it
// must be applied every year, not just at the end, or the count drifts.
function nbYear(p0, percent, aug, p) {
  let population = p0;
  let years = 0;
  while (population < p) {
    population = Math.floor(population + population * (percent / 100) + aug);
    years++;
  }
  return years;
}

// Ex3.2 - People on the Bus
// Destructuring [on, off] straight in the reduce parameter keeps it readable.
function numberOfPeople(busStops) {
  return busStops.reduce((total, [on, off]) => total + on - off, 0);
}


/* ---------------------------------------------------------
   ADVANCED MATH
   --------------------------------------------------------- */

// Ex4.1 - Fibonacci (iterative, O(n) time / O(1) space)
// This is the version to show in an interview. Naive recursion is O(2^n) and
// dies around n = 40.
function fibonacci(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a; // fibonacci(0) = 0, fibonacci(1) = 1, fibonacci(7) = 13
}

// Ex4.1 alt - memoized recursion, if they want to see the recursive shape.
function fibonacciMemo(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}

// Ex4.2 - Tribonacci
// slice(0, n) handles the edge cases for free: n = 0 gives [], n = 2 gives the
// first two signature elements only.
function tribonacci(signature, n) {
  const result = signature.slice(0, n);
  for (let i = 3; i < n; i++) {
    result.push(result[i - 1] + result[i - 2] + result[i - 3]);
  }
  return result;
}


/* ---------------------------------------------------------
   BASIC ITERATION LOGIC
   --------------------------------------------------------- */

// Ex5.1 - Trimming string
// Negative index in slice counts from the end.
function removeChar(str) {
  return str.slice(1, -1);
}

// Ex5.2 - String Repeat
function repeatStr(n, s) {
  return s.repeat(n);
}

// Ex5.3 - To Camel Case
// The regex captures the letter after each - or _, then we uppercase it.
// The delimiter itself is consumed by the match, so it disappears.
// The first letter is left untouched, which is exactly what the spec asks.
function toCamelCase(str) {
  return str.replace(/[-_](\w)/g, (match, letter) => letter.toUpperCase());
}

// Ex5.4 - To Weird Case
// Index resets per word, so split on spaces FIRST, then map each word.
function toWeirdCase(string) {
  return string
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
        .join("")
    )
    .join(" ");
}

// Ex5.5 - Abbreviate two words
function abbrevName(name) {
  return name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join(".");
}

// Ex5.6 - Mask
// padStart pads to the ORIGINAL length, which handles "" and "1" without any
// special-case branches.
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}

// Ex5.7 - Shortest word
function findShort(s) {
  return Math.min(...s.split(" ").map((word) => word.length));
}

// Ex5.8 - Longest word(s)
// Returns an array, since the spec says "word[s]" — there can be ties.
function longestWords(s) {
  const words = s.split(" ");
  const max = Math.max(...words.map((word) => word.length));
  return words.filter((word) => word.length === max);
}


/* ---------------------------------------------------------
   ADVANCED ITERATION LOGIC
   NOTE: the text for these didn't come through in your PDF upload.
   Below are the standard versions of these katas — check them against
   the actual wording in your document before submitting.
   --------------------------------------------------------- */

// Ex6.1 - Mumbling            accum("abcd") -> "A-Bb-Ccc-Dddd"
function accum(s) {
  return s
    .split("")
    .map((ch, i) => ch.toUpperCase() + ch.toLowerCase().repeat(i))
    .join("-");
}

// Ex6.2 - Counting Duplicates
// Counts how many distinct characters appear more than once (case-insensitive).
function duplicateCount(text) {
  const counts = {};
  for (const ch of text.toLowerCase()) {
    counts[ch] = (counts[ch] || 0) + 1;
  }
  return Object.values(counts).filter((n) => n > 1).length;
}

// Ex6.4 - Isogram
// A Set drops duplicates, so if the size shrank, there was a repeat.
// "" is considered an isogram, and this handles that correctly.
function isIsogram(str) {
  const lower = str.toLowerCase();
  return new Set(lower).size === lower.length;
}


// Ex6.3 (organize strings), Ex7 (implement JS methods) and Ex8 (perimeter of
// a rectangle) are missing from the upload — send me the text and I'll add them.


module.exports = {
  boolToWord, sumTwoSmallestNumbers, binaryArrayToNumber, findNextSquare,
  findUniq, summation, centuryFromYear, basicOp, nbYear, numberOfPeople,
  fibonacci, fibonacciMemo, tribonacci, removeChar, repeatStr, toCamelCase,
  toWeirdCase, abbrevName, maskify, findShort, longestWords, accum,
  duplicateCount, isIsogram,
};