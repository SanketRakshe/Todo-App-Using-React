const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const {todo} = require('./db');

env.config();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000

// Post request for submitting todo to the db

app.post('/todo', function(req, res) {
    try {

    } catch(err) {

    }
});


// Get request for retriving all todos from db

app.get('get', async function(req, res) {
    const todos = await todo.find({});
    res.json(todos);
});

// put request for updating status of todo completed/not yet completed

app.put('/put', function(req, res) {

});

app.listen(PORT, () => {
    console.log(`Your server are listening on http://localhost:${PORT}`);
});