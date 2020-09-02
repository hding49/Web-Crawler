const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema(
 {
    Reserved: {type: String, required: true},
    Track: {type: String, required: true},
    Genre: {type: String, required: true},
 });

module.exports = mongoose.model('job', JobSchema);