// backend/controllers/musicController.js

const Music = require('../models/MusicRelease');

// Obtener todos los lanzamientos de música
const getAllMusicReleases = async (req, res) => {
    try {
        const musicReleases = await Music.find();
        res.json(musicReleases);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo lanzamiento de música
const createMusicRelease = async (req, res) => {
    try {
        const { title, artist, label, link, image } = req.body;
        const newRelease = new Music({ title, artist, label, link, image });
        await newRelease.save();
        res.status(201).json(newRelease);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un lanzamiento de música
const updateMusicRelease = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, artist, label, link, image } = req.body;
        const updatedRelease = await Music.findByIdAndUpdate(
            id,
            { title, artist, label, link, image },
            { new: true }
        );
        res.json(updatedRelease);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un lanzamiento de música
const deleteMusicRelease = async (req, res) => {
    try {
        const { id } = req.params;
        await Music.findByIdAndDelete(id);
        res.json({ message: 'Proyecto eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllMusicReleases,
    createMusicRelease,
    updateMusicRelease,
    deleteMusicRelease
};

