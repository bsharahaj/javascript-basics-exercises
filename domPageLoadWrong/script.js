// ===== Task 1: Investigation =====
// Document the scene before changing anything.
const title = document.getElementById("mainTitle");
const features = document.querySelectorAll(".feature");
const description = document.querySelector(".description");

console.log(title.textContent);        // "???"
console.log(description.innerHTML);     // "This page is not ready yet."

// ===== Task 2: Fix the Content =====
// Correct the title and rewrite the broken, invisible paragraph.
title.textContent = "Welcome to the Dashboard";
description.textContent = "Your dashboard is ready. Explore the features below.";
description.classList.remove("hidden"); // bring it back into view

// ===== Task 3: Style the Page =====
// Apply the unused highlight class to the title,
// and make absolutely sure the description is no longer hidden.
title.classList.add("highlight");
description.classList.remove("hidden"); // safe even if already removed

// ===== Task 4: Clean the Page =====
// Remove the rogue "REMOVE ME" list item.
const featureList = document.querySelectorAll(".feature");
featureList.forEach((item) => {
  if (item.textContent.trim() === "REMOVE ME") {
    item.remove();
  }
});

// ===== Task 5: Add Missing Content =====
// Create a heading and place it directly above the features list.
const featuresUl = document.getElementById("features");
const heading = document.createElement("h2");
heading.textContent = "Available Features";
featuresUl.before(heading); // inserts the h2 right before the <ul>

// ===== Task 6: Repair the Link =====
// Read the current href, log it, then fix the target and the text.
const link = document.getElementById("mainLink");
console.log(link.getAttribute("href")); // "#"

link.href = "https://example.com";
link.textContent = "Go to Dashboard";