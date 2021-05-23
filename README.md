# MemeTastic-backend

Created for Elasticsearch X Code for Cause Hackathon.

This is the backend for my MemeTastic Application.

## How it works

- Scrapes top 100 memes from subreddit dankmemes using reddit's public API.

- Adds the `link` and the `title` of those 100 memes in `elasticsearch` which can then be visualised using `kibana`.

- These steps are repeated after every 30 minutes using a CI/CD pipeline created using `GitHub Actions` to make sure that the Application stays up-to-date.
