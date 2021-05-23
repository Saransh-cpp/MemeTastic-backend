const elasticsearch = require('elasticsearch');

const client =elasticsearch.Client({
    host: "localhost:9200"
});

module.exports = client;