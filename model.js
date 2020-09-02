const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema(
 {
    title: {type: String, required: true},
    company: {type: String, required: true},
    summary: {type: String, required: true},
 });

module.exports = mongoose.model('Product', JobSchema);