const mongoose = require('mongoose');
//o6MHRQM9UNlYbUMe
mongoose.connect("mongodb+srv://sujjalyadav:o6MHRQM9UNlYbUMe@cluster0.mgthhai.mongodb.net/?retryWrites=true&w=majority")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todo
}