// ===== Task 1: The Like Button =====
const likeBtn = document.getElementById("likeBtn");
const resetBtn = document.getElementById("resetBtn");
const likeCount = document.getElementById("likeCount");

let likes = 0;

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.textContent = `Likes: ${likes}`;
});

resetBtn.addEventListener("click", () => {
  likes = 0;
  likeCount.textContent = "Likes: 0"; // restore original text
});


// ===== Task 2: The Greeter =====
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greetMsg = document.getElementById("greetMsg");

greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name) {
    greetMsg.textContent = `Hello, ${name}!`;
  } else {
    greetMsg.textContent = "Please enter your name first.";
  }

  nameInput.value = ""; // clear the field
  nameInput.focus();    // give it focus
});


// ===== Task 3: The Live Mirror =====
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("input", () => {
  const text = liveInput.value;

  liveOutput.textContent = text === "" ? "Waiting..." : text;

  // add "long" class only when text is longer than 20 characters
  if (text.length > 20) {
    liveOutput.classList.add("long");
  } else {
    liveOutput.classList.remove("long");
  }
});


// ===== Task 4: The Key Logger =====
const keyInput = document.getElementById("keyInput");
const keyLog = document.getElementById("keyLog");

keyInput.addEventListener("keydown", (e) => {
  // Escape clears the input and resets the log
  if (e.key === "Escape") {
    keyInput.value = "";
    keyLog.textContent = "";
    return;
  }

  // Collect any modifiers that were held
  const modifiers = [];
  if (e.ctrlKey) modifiers.push("Ctrl");
  if (e.shiftKey) modifiers.push("Shift");
  if (e.altKey) modifiers.push("Alt");

  // Don't repeat the modifier name if the pressed key IS the modifier
  const isModifierKey = ["Control", "Shift", "Alt"].includes(e.key);

  let display;
  if (modifiers.length > 0 && !isModifierKey) {
    display = `${modifiers.join(" + ")} + ${e.key}`; // e.g. "Ctrl + S"
  } else {
    display = e.key; // e.g. "Enter" or "a"
  }

  keyLog.textContent = display;
});


// ===== Task 5: The Task Delegator =====
const taskList = document.getElementById("taskList");

// Single click listener on the <ul>, works via event delegation
taskList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    // toggle strikethrough
    const struck = e.target.style.textDecoration === "line-through";
    e.target.style.textDecoration = struck ? "none" : "line-through";
  }
});

// Double-click removes the item
taskList.addEventListener("dblclick", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});


// ===== Task 6: The Smart Form =====
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop the page from reloading

  // Access fields through e.target (the form itself)
  const email = e.target.emailInput.value.trim();
  const subject = e.target.subjectInput.value.trim();

  if (!email || !subject) {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.style.color = "red";
    return;
  }

  formStatus.textContent = `Message sent to ${email}!`;
  formStatus.style.color = "green";

  // clear both fields and remove any leftover error styling
  e.target.emailInput.value = "";
  e.target.subjectInput.value = "";
});