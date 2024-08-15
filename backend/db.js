const mongoose = require('mongoose');
const env = require('dotenv');

// Load environment variables from.env file

env.config();

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);

const todoSchema = mongoose.Schema({
    title: String,
    desc: String,
    completed: Boolean
});

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo: todo
}