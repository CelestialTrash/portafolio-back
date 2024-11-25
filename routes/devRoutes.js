// backend/routes/devRoutes.js
const express = require('express');
const { getAllDevProjects, createDevProject, updateDevProject, deleteDevProject } = require('../controllers/devController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Obtener todos los proyectos de Dev (ruta pública)
router.get('/', getAllDevProjects);

// Crear, actualizar y eliminar proyectos de Dev (rutas protegidas)
router.post('/', protect, createDevProject);
router.put('/:id', protect, updateDevProject);
router.delete('/:id', protect, deleteDevProject);

module.exports = router;
