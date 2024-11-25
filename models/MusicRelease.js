// backend/models/MusicRelease.js
const mongoose = require('mongoose');

const musicReleaseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    image: {
        type: String, // URL to the image
        required: true
    },
    link: {
        type: String, // URL to the song
        required: true
    },
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('MusicRelease', musicReleaseSchema);
