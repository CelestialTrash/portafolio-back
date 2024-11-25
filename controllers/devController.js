// backend/controllers/devController.js
const DevProject = require('../models/DevProject');

// Obtener todos los proyectos de Dev
const getAllDevProjects = async (req, res) => {
    try {
        const devProjects = await DevProject.find();
        res.json(devProjects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo proyecto de Dev
const createDevProject = async (req, res) => {
    const { title, description, image, link } = req.body;

    // Validar campos requeridos
    if (!title || !description || !image || !link) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    try {
        const devProject = new DevProject({ title, description, image, link });
        const newProject = await devProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        console.error('Error al guardar el proyecto:', error.message);
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un proyecto de Dev
const updateDevProject = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProject = await DevProject.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un proyecto de Dev
const deleteDevProject = async (req, res) => {
    try {
        const { id } = req.params;
        await DevProject.findByIdAndDelete(id);
        res.json({ message: 'Proyecto de Dev eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllDevProjects,
    createDevProject,
    updateDevProject,
    deleteDevProject,
};
