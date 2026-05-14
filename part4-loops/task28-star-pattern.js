// Task 28: Star pattern with nested loops
//
// Outer loop = rows (1 to 5)
// Inner loop = how many stars in that row (matches the row number)

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
/* Output:
*
**
***
****
*****
*/
