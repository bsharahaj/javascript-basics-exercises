const users = [
  { id: 1, username: "dania", followers: 1200, verified: true },
  { id: 2, username: "omar", followers: 350, verified: false },
  { id: 3, username: "luna", followers: 2400, verified: true },
  { id: 4, username: "zain", followers: 90, verified: false },
  { id: 5, username: "maya", followers: 800, verified: true },
];

const posts = [
  {
    id: 1,
    userId: 1,
    title: "Why JavaScript is Weird",
    content: "JavaScript has strange but interesting behavior.",
    likes: 1500,
    category: "Programming",
  },
  {
    id: 2,
    userId: 3,
    title: "Best Gaming Setup",
    content: "Today I will show my gaming room.",
    likes: 2200,
    category: "Gaming",
  },
  {
    id: 3,
    userId: 1,
    title: "React Tips",
    content: "Use components to organize your UI.",
    likes: 900,
    category: "Programming",
  },
  {
    id: 4,
    userId: 5,
    title: "Morning Routine",
    content: "Small habits can change your day.",
    likes: 700,
    category: "Lifestyle",
  },
];

/* ===== Task 1: Create User Cards ===== */
const userCards = users.map((user) => {
  const status = user.followers >= 500 ? "Active User" : "New User";
  return `@${user.username} - ${user.followers} followers - ${status}`;
});
console.log("Task 1 - User Cards:");
console.log(userCards);

/* ===== Task 2: Find Viral Posts (more than 1000 likes) ===== */
const viralPosts = posts.filter((post) => post.likes > 1000);
console.log("\nTask 2 - Viral Posts:");
console.log(viralPosts);

/* ===== Task 3: Find the Most Popular User (highest followers) ===== */
const mostPopularUser = users.reduce((top, user) => {
  return user.followers > top.followers ? user : top;
});
console.log("\nTask 3 - Most Popular User:");
console.log(mostPopularUser);

/* ===== Task 4: Find Inactive Users (no posts) ===== */
const inactiveUsers = users.filter((user) => {
  return !posts.some((post) => post.userId === user.id);
});
console.log("\nTask 4 - Inactive Users:");
console.log(inactiveUsers);

/* ===== Task 5: Calculate Total Likes ===== */
const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);
console.log("\nTask 5 - Total Likes:");
console.log(totalLikes);

/* ===== Task 6: Check If There Is a Verified User ===== */
const hasVerifiedUser = users.some((user) => user.verified);
console.log("\nTask 6 - Is there a verified user?");
console.log(hasVerifiedUser);

/* ===== Task 7: Check Platform Quality (every post has title AND content) ===== */
const goodQuality = posts.every((post) => post.title && post.content);
console.log("\nTask 7 - Do all posts have title and content?");
console.log(goodQuality);

/* ===== Task 8: Create Trending Titles (uppercase) ===== */
const trendingTitles = posts.map((post) => post.title.toUpperCase());
console.log("\nTask 8 - Trending Titles:");
console.log(trendingTitles);

/* ===== Task 9: Create Gaming Feed ===== */
const gamingFeed = posts.filter((post) => post.category === "Gaming");
console.log("\nTask 9 - Gaming Feed:");
console.log(gamingFeed);

/* ===== Task 10: Sort Users by Followers (desc, without mutating original) ===== */
const sortedUsers = [...users].sort((a, b) => b.followers - a.followers);
console.log("\nTask 10 - Users Sorted by Followers (desc):");
console.log(sortedUsers);

/* ===== Task 11: Find User by Username ===== */
const searchedUsername = "dania";
const foundUser = users.find((user) => user.username === searchedUsername);
console.log("\nTask 11 - Found User:");
console.log(foundUser);

/* ===== Task 12: Create Platform Statistics ===== */
const totalUsers = users.length;
const totalPosts = posts.length;
const averageLikesPerPost = totalLikes / totalPosts;

// Count how many posts belong to each category, then pick the biggest
const categoryCounts = posts.reduce((counts, post) => {
  counts[post.category] = (counts[post.category] || 0) + 1;
  return counts;
}, {});

const mostPopularCategory = Object.keys(categoryCounts).reduce((best, category) => {
  return categoryCounts[category] > categoryCounts[best] ? category : best;
});

const platformStatistics = {
  totalUsers: totalUsers,
  totalPosts: totalPosts,
  totalLikes: totalLikes,
  averageLikesPerPost: averageLikesPerPost,
  mostPopularCategory: mostPopularCategory,
};
console.log("\nTask 12 - Platform Statistics:");
console.log(platformStatistics);