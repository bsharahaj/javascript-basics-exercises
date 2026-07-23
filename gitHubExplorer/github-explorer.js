/* =========================================================
   GitHub Explorer — JavaScript Promises Exercise
   Rules: Promises only. No async/await. No libraries.
   =========================================================

   THE ONE THING TO UNDERSTAND FIRST:
   fetch() only rejects on NETWORK failure (no connection, DNS dead).
   A 404 or 403 is a perfectly successful HTTP round trip as far as fetch
   is concerned — the Promise RESOLVES. That is why every function below
   has to check `response.ok` by hand and throw. Miss this and your
   .catch() blocks will never run.

   Also: throwing inside a .then() callback returns a rejected Promise.
   `throw new Error("x")` and `return Promise.reject(new Error("x"))` are
   equivalent here. Throwing reads better.
   ========================================================= */


/* ---------------------------------------------------------
   TASK 1 — Fetch User Profile
   --------------------------------------------------------- */

function fetchGitHubUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then((response) => {
    // Bonus challenge #3: rate limiting. 403 must be checked BEFORE the
    // generic !ok check, or it gets misreported as "User not found".
    if (response.status === 403) {
      throw new Error("Rate limit reached -- try again in 1 hour");
    }
    if (!response.ok) {
      throw new Error("User not found");
    }
    return response.json(); // returning a Promise from .then() flattens it
  });
}


/* ---------------------------------------------------------
   TASK 2 — Fetch Repositories
   --------------------------------------------------------- */

function fetchRepos(user) {
  return fetch(`https://api.github.com/users/${user.login}/repos`).then(
    (response) => {
      if (response.status === 403) {
        throw new Error("Rate limit reached -- try again in 1 hour");
      }
      if (!response.ok) {
        throw new Error("Failed to fetch repos");
      }
      return response.json();
    }
  );
}


/* ---------------------------------------------------------
   TASK 3 + TASK 5 — Fetch Repository Languages (fails softly)
   --------------------------------------------------------- */

// This function NEVER rejects. That is the entire point.
// Promise.all is all-or-nothing: the moment one input Promise rejects, the
// whole thing rejects and you lose the results of every sibling request.
// By catching here and resolving with {}, a single dead repo costs us one
// repo's data instead of all five.
function fetchRepoLanguages(repo) {
  const owner = repo.owner ? repo.owner.login : repo.ownerLogin;

  return fetch(`https://api.github.com/repos/${owner}/${repo.name}/languages`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json();
    })
    .catch(() => {
      console.log(`Failed to fetch languages for ${repo.name}`);
      return {}; // resolve with empty, not reject
    });
}


/* ---------------------------------------------------------
   BONUS — Summary via reduce + Object.entries
   --------------------------------------------------------- */

function printSummary(results) {
  console.log("\n--- Summary ---");

  results.forEach(({ name, languages }) => {
    const entries = Object.entries(languages); // [["C", 396], ...]

    if (entries.length === 0) {
      console.log(`${name}: no language data`);
      return;
    }

    // reduce with no initial value seeds with entries[0] — safe here
    // because we already returned early on the empty case.
    const topLanguage = entries.reduce((best, current) =>
      current[1] > best[1] ? current : best
    );
    const totalBytes = entries.reduce((sum, [, bytes]) => sum + bytes, 0);

    console.log(
      `${name} — main language: ${topLanguage[0]} — ` +
        `total: ${totalBytes.toLocaleString()} bytes`
    );
  });
}


/* ---------------------------------------------------------
   TASK 4 + 5 + 6 — The main chain
   --------------------------------------------------------- */

function runGitHubExplorer(username) {
  return fetchGitHubUser(username)
    .then((user) => {
      console.log(`User: ${user.name} (@${user.login})`);
      console.log(`Public repos: ${user.public_repos}\n`);
      return fetchRepos(user); // returning the Promise keeps the chain FLAT
    })
    .then((repos) => {
      // Bonus challenge #1: sort by stars descending, then take 5.
      // Copy with [...repos] first — .sort() mutates.
      const topRepos = [...repos]
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 5);

      // Fire all 5 language requests in PARALLEL, not one after another.
      // Note: .map(fetchRepoLanguages) also works, but .map passes three
      // arguments (element, index, array) to its callback. Harmless here,
      // dangerous with functions that take a second parameter.
      const languagePromises = topRepos.map((repo) => fetchRepoLanguages(repo));

      return Promise.all(languagePromises).then((languagesList) =>
        topRepos.map((repo, i) => ({
          name: repo.name,
          languages: languagesList[i],
        }))
      );
    })
    .then((results) => {
      console.log(results);
      printSummary(results);
      return results;
    })
    .catch((error) => {
      // Task 5: one catch at the end of the chain handles a rejection from
      // ANY link in it. Errors propagate down until something catches them.
      console.log(`Error: ${error.message}`);
    })
    .finally(() => {
      // Task 6: runs on success AND failure. Takes no argument, and passes
      // the previous value straight through.
      console.log("\nGitHub Explorer operation complete");
    });
}


// --- Run it ---
// The guard means "only run if this file was launched directly, not
// imported by another file." In a browser there is no `require`, so the
// condition is true and it runs normally.
if (typeof require === "undefined" || require.main === module) {
  runGitHubExplorer("octocat");
}


// Export for reuse / testing (harmless in a browser if you delete this line)
if (typeof module !== "undefined") {
  module.exports = {
    fetchGitHubUser,
    fetchRepos,
    fetchRepoLanguages,
    runGitHubExplorer,
    printSummary,
  };
}