// Part 1: Create the Course Class
class Course {
  constructor(title, instructor, maxStudents) {
    this.title = title;
    this.instructor = instructor;
    this.maxStudents = maxStudents;
    this.enrolledStudents = 0; // starts empty
  }

  // Part 2: Add Behavior
  enrollStudent() {
    if (this.enrolledStudents < this.maxStudents) {
      this.enrolledStudents++;
    }
    // if we're at the limit, we simply do nothing (no error)
  }
}

// Part 3: Create Course Instances
const jsCourse = new Course("JavaScript Basics", "Dania", 30);
const pyCourse = new Course("Python Fundamentals", "Mohammad", 25);

console.log(jsCourse);
console.log(pyCourse);

// Part 4: Use the Instances
jsCourse.enrollStudent();
jsCourse.enrollStudent();
jsCourse.enrollStudent(); // 3 students in JavaScript Basics

pyCourse.enrollStudent(); // 1 student in Python Fundamentals

console.log(`${jsCourse.title} has ${jsCourse.enrolledStudents} enrolled`);
console.log(`${pyCourse.title} has ${pyCourse.enrolledStudents} enrolled`);