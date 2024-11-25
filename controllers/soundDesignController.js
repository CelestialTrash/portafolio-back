// backend/controllers/soundDesignController.js
const SoundDesignProject = require('../models/SoundDesignProject');

// Obtener todos los proyectos de Sound Design
const getAllSoundDesignProjects = async (req, res) => {
    try {
        const soundDesignProjects = await SoundDesignProject.find();
        res.json(soundDesignProjects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo proyecto de Sound Design
const createSoundDesignProject = async (req, res) => {
    const soundDesignProject = new SoundDesignProject(req.body);
    try {
        const newProject = await soundDesignProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un proyecto de Sound Design
const updateSoundDesignProject = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProject = await SoundDesignProject.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un proyecto de Sound Design
const deleteSoundDesignProject = async (req, res) => {
    try {
        const { id } = req.params;
        await SoundDesignProject.findByIdAndDelete(id);
        res.json({ message: 'Proyecto de Sound Design eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllSoundDesignProjects,
    createSoundDesignProject,
    updateSoundDesignProject,
    deleteSoundDesignProject
};
