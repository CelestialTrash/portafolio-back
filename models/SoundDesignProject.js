// backend/models/SoundDesignProject.js
const mongoose = require('mongoose');

const soundDesignProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    video: {
        type: String, // URL to the video file or YouTube/Vimeo link
        required: true
    }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('SoundDesignProject', soundDesignProjectSchema);
