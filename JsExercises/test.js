const s = require('./solutions.js');
let pass = 0, fail = 0;
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
function t(label, actual, expected) {
  if (eq(actual, expected)) { pass++; }
  else { fail++; console.log(`FAIL ${label}: got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`); }
}

t('1.1a', s.boolToWord(true), "Yes");
t('1.1b', s.boolToWord(false), "No");

t('2.1a', s.sumTwoSmallestNumbers([19,5,42,2,77]), 7);
t('2.1b', s.sumTwoSmallestNumbers([10,343445353,3453445,3453545353453]), 3453455);

t('2.2a', s.binaryArrayToNumber([0,0,0,1]), 1);
t('2.2b', s.binaryArrayToNumber([0,0,1,0]), 2);
t('2.2c', s.binaryArrayToNumber([0,1,0,1]), 5);
t('2.2d', s.binaryArrayToNumber([1,0,0,1]), 9);
t('2.2e', s.binaryArrayToNumber([0,1,1,0]), 6);
t('2.2f', s.binaryArrayToNumber([1,1,1,1]), 15);
t('2.2g', s.binaryArrayToNumber([1,0,1,1]), 11);
t('2.2h', s.binaryArrayToNumber([1,0,1,1,0,1]), 45);

t('2.3a', s.findNextSquare(121), 144);
t('2.3b', s.findNextSquare(625), 676);
t('2.3c', s.findNextSquare(114), -1);

t('2.4a', s.findUniq([1,1,1,2,1,1]), 2);
t('2.4b', s.findUniq([0,0,0.55,0,0]), 0.55);
t('2.4c', s.findUniq([3,10,3,3]), 10);
t('2.4d', s.findUniq([8,8,8,1]), 1);

t('2.5a', s.summation(2), 3);
t('2.5b', s.summation(8), 36);

t('2.6a', s.centuryFromYear(1705), 18);
t('2.6b', s.centuryFromYear(1900), 19);
t('2.6c', s.centuryFromYear(1601), 17);
t('2.6d', s.centuryFromYear(2000), 20);
t('2.6e', s.centuryFromYear(100), 1);
t('2.6f', s.centuryFromYear(101), 2);

t('2.7a', s.basicOp('+',4,7), 11);
t('2.7b', s.basicOp('-',15,18), -3);
t('2.7c', s.basicOp('*',5,5), 25);
t('2.7d', s.basicOp('/',49,7), 7);

t('3.1a', s.nbYear(1000,2,50,1200), 3);
t('3.1b', s.nbYear(1500,5,100,5000), 15);
t('3.1c', s.nbYear(1500000,2.5,10000,2000000), 10);
t('3.1d', s.nbYear(1500000,0.25,1000,2000000), 94);

t('3.2a', s.numberOfPeople([[10,0],[3,5],[5,8]]), 5);
t('3.2b', s.numberOfPeople([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]), 17);

t('4.1a', s.fibonacci(0), 0);
t('4.1b', s.fibonacci(1), 1);
t('4.1c', s.fibonacci(7), 13);
t('4.1d', s.fibonacci(12), 144);
t('4.1e', s.fibonacciMemo(12), 144);
t('4.1f', s.fibonacciMemo(70), 190392490709135);

t('4.2a', s.tribonacci([1,1,1],10), [1,1,1,3,5,9,17,31,57,105]);
t('4.2b', s.tribonacci([0,0,1],10), [0,0,1,1,2,4,7,13,24,44]);
t('4.2c', s.tribonacci([1,1,1],0), []);
t('4.2d', s.tribonacci([300,200,100],0), []);
t('4.2e', s.tribonacci([1,2,3],2), [1,2]);

t('5.1a', s.removeChar("eloquent"), "loquen");
t('5.1b', s.removeChar("country"), "ountr");

t('5.2a', s.repeatStr(6,"I"), "IIIIII");
t('5.2b', s.repeatStr(5,"Hello"), "HelloHelloHelloHelloHello");

t('5.3a', s.toCamelCase("the-stealth-warrior"), "theStealthWarrior");
t('5.3b', s.toCamelCase("The_Stealth_Warrior"), "TheStealthWarrior");
t('5.3c', s.toCamelCase(""), "");

t('5.4a', s.toWeirdCase("String"), "StRiNg");
t('5.4b', s.toWeirdCase("Weird string case"), "WeIrD StRiNg CaSe");

t('5.5a', s.abbrevName("Sam Harris"), "S.H");
t('5.5b', s.abbrevName("Patrick Feeney"), "P.F");
t('5.5c', s.abbrevName("evan cole"), "E.C");

t('5.6a', s.maskify("4556364607935616"), "############5616");
t('5.6b', s.maskify("64607935616"), "#######5616");
t('5.6c', s.maskify("1"), "1");
t('5.6d', s.maskify(""), "");
t('5.6e', s.maskify("Skippy"), "##ippy");
t('5.6f', s.maskify("Nananananananananananananananana Batman!"), "####################################man!");

t('5.7a', s.findShort("bitcoin take over the world maybe who knows perhaps"), 3);
t('5.7b', s.findShort("turns out random test cases are easier than writing out basic ones"), 3);

t('5.8a', s.longestWords("the quick brown fox jumped"), ["jumped"]);
t('5.8b', s.longestWords("aa bb cc"), ["aa","bb","cc"]);

t('6.1a', s.accum("abcd"), "A-Bb-Ccc-Dddd");
t('6.1b', s.accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");

t('6.2a', s.duplicateCount(""), 0);
t('6.2b', s.duplicateCount("abcde"), 0);
t('6.2c', s.duplicateCount("aabbcde"), 2);
t('6.2d', s.duplicateCount("aabBcde"), 2);
t('6.2e', s.duplicateCount("Indivisibilities"), 2);

t('6.4a', s.isIsogram("Dermatoglyphics"), true);
t('6.4b', s.isIsogram("aba"), false);
t('6.4c', s.isIsogram("moOse"), false);
t('6.4d', s.isIsogram(""), true);

console.log(`\n${pass} passed, ${fail} failed`);