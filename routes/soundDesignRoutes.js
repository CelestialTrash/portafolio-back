// backend/routes/soundDesignRoutes.js
const express = require('express');
const { getAllSoundDesignProjects, createSoundDesignProject, updateSoundDesignProject, deleteSoundDesignProject } = require('../controllers/soundDesignController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Obtener todos los proyectos de Sound Design (ruta pública)
router.get('/', getAllSoundDesignProjects);

// Crear, actualizar y eliminar proyectos de Sound Design (rutas protegidas)
router.post('/', protect, createSoundDesignProject);
router.put('/:id', protect, updateSoundDesignProject);
router.delete('/:id', protect, deleteSoundDesignProject);

module.exports = router;
