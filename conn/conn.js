const mongoose = require("mongoose");

const conn = async () => {
    try {
        const response = await mongoose.connect('mongodb+srv://manage:12345@cluster0.mrt0hdm.mongodb.net/TaskManagement');
        if (response) {
            console.log("Connected to MongoDB");
        }
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

conn();
