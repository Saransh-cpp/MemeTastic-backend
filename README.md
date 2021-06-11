# MemeTastic-backend

<!-- ![MemeTastic](https://github.com/Saransh-cpp/MemeTastic-backend/actions/workflows/node.js.yml/badge.svg?branch=master) -->

Created for Elasticsearch X Code for Cause Hackathon. (Winner for the hackthon - [devpost project](https://devpost.com/software/memetastic))

This is the backend for my MemeTastic Application.

## How it works

- Scrapes top 100 memes from subreddit `memes` using reddit's public API.

- Adds the `link` and the `title` of those 100 memes in `elasticsearch` which can then be visualised using `kibana`.

- `Elasticsearch` has been hosted on `Google Cloud`.

- The first two steps are repeated after every 30 minutes using a CI/CD pipeline created using `GitHub Actions` to make sure that the Application stays up-to-date.

## Ngrams

- This also uses ngrams, implemetation is given below (implemeted using `kibana`)

```JSON
PUT dankmemes
{
  "settings": {
    "analysis": {
      "analyzer": {
        "autocomplete": {
          "tokenizer": "autocomplete",
          "filter": [
            "lowercase"
          ]
        },
        "autocomplete_search": {
          "tokenizer": "lowercase"
        }
      },
      "tokenizer": {
        "autocomplete": {
          "type": "edge_ngram",
          "min_gram": 1,
          "max_gram": 10,
          "token_chars": [
            "letter"
          ]
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "title": {
        "type": "text",
        "analyzer": "autocomplete",
        "search_analyzer": "autocomplete_search"
      }
    }
  }
}
```
