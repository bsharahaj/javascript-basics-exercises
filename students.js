// STEP 1 — Create the initial list
let students = ["Dania", "Omar", "Lina", "Rami"];

// STEP 2 — Add "Sara" to the end
students.push("Sara");

// STEP 3 — Add "Adam" to the beginning
students.unshift("Adam");

// STEP 4 — Replace "Lina" with "Lamar"
students[students.indexOf("Lina")] = "Lamar";

// STEP 5 — Remove the last student
let removedLast = students.pop();

// STEP 6 — Remove the first student
let removedFirst = students.shift();

// STEP 7 — Check if "Rami" exists
let hasRami = students.includes("Rami");

// STEP 8 — Find the index of "Omar"
let omarIndex = students.indexOf("Omar");

// STEP 9 — Create groupA with first two students
let groupA = students.slice(0, 2);

// STEP 10 — Merge groups
let groupB = ["Nour", "Tala"];
let allGroups = groupA.concat(groupB);

// STEP 11 — Convert allGroups to a string with " | "
let groupString = allGroups.join(" | ");

// STEP 12 — Sort students alphabetically
students.sort();

// STEP 13 — Reverse the sorted list
students.reverse();

// STEP 14 — Replace middle three with "Reserved"
let seats = [1, 2, 3, 4, 5];
seats.splice(1, 3, "Reserved", "Reserved", "Reserved");
let reservedSeats = seats;

// STEP 15 — Convert students list to string
let studentsString = students.join(", ");

// STEP 16 — Final Output
console.log("students:", students);
console.log("removedLast:", removedLast);
console.log("removedFirst:", removedFirst);
console.log("hasRami:", hasRami);
console.log("omarIndex:", omarIndex);
console.log("groupA:", groupA);
console.log("allGroups:", allGroups);
console.log("groupString:", groupString);
console.log("reservedSeats:", reservedSeats);
console.log("studentsString:", studentsString);