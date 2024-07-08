const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true, // Ensure uniqueness per user
    },
    desc: {
        type: String,
        required: true,
		unique: true,
    },
    important: {
        type: Boolean,
        default: false,
    },
    complete: {
        type: Boolean,
        default: false,
    },
   
}, { timestamps: true });

module.exports = mongoose.model("task", TaskSchema);
