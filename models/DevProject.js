// backend/models/DevProject.js
const mongoose = require('mongoose');

const devProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String, // URL to the project image
        required: true
    },
    link: {
        type: String, // URL to the project or website
        required: true
    },
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('DevProject', devProjectSchema);
