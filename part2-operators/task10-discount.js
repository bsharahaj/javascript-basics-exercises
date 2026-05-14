// Task 10: Calculate total price with discount

const price = 120;
const quantity = 3;
const discountPercent = 10;

const subtotal = price * quantity;                    // 360
const discount = subtotal * discountPercent / 100;    // 36
const total = subtotal - discount;                    // 324

console.log(`subtotal: ${subtotal} | discount: ${discount} | total: ${total}`);
// Output: subtotal: 360 | discount: 36 | total: 324
