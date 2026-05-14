// Task 14: Access checker with logical operators

const isLoggedIn = true;
const isAdmin = false;
const age = 20;

const canAccessBasic = isLoggedIn && age >= 18;       // true && true   → true
const canAccessAdmin = isLoggedIn && isAdmin;         // true && false  → false
const canAccessSomething = isLoggedIn || age >= 21;   // true || ...    → true (short-circuits)

console.log(canAccessBasic, canAccessAdmin, canAccessSomething);
// Output: true false true
