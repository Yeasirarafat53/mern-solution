const mongoose = require('mongoose')
const DataSchema = mongoose.Schema({
    UserName: { type: String },
    TodoSubject: { type: String },
    TodoDescription: { type: String },
    TodoStatus: { type: String},
    TodoCreateDate: { type: Date },
    TodoUpdateDate: { type: Date }
}, { versionKey: false });
const ToDoListModel = mongoose.model('Todolist', DataSchema);
module.exports = ToDoListModel