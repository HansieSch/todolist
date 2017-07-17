var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListItem = new Schema({
    item: { type: String, required: true},
    date_created: { type: Date, default: Date.now },
    done: { type: Boolean, default: false },
    date_completed: Date
});

module.exports = mongoose.model('ListItem', ListItem);