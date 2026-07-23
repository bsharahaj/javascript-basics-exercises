# GitHub Explorer

A lightweight GitHub Explorer built with the Fetch API and Promises only —
no `async`/`await`, no libraries. It fetches a user's profile, their
repositories, and the language breakdown for their top repos.

## What I built

| Function | Purpose |
|---|---|
| `fetchGitHubUser(username)` | Fetches a profile. Rejects with `"User not found"` on a bad response. |
| `fetchRepos(user)` | Takes the user object from task 1, fetches their repos. Rejects with `"Failed to fetch repos"`. |
| `fetchRepoLanguages(repo)` | Fetches one repo's languages. **Never rejects** — resolves with `{}` on failure. |
| `runGitHubExplorer(username)` | Chains all of the above and logs the result. |

## How to run

Requires Node 18 or newer (for built-in `fetch`).