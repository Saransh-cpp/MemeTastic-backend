const express = require('express');
const elasticsearch = require('elasticsearch');

const app = express();
const client =elasticsearch.Client({
    host: "localhost:9200"
});