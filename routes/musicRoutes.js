// backend/routes/musicRoutes.js
const express = require('express');
const { getAllMusicReleases, createMusicRelease, updateMusicRelease, deleteMusicRelease } = require('../controllers/musicController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Obtener todos los lanzamientos de música (ruta pública)
router.get('/', getAllMusicReleases);

// Crear, actualizar y eliminar lanzamientos de música (rutas protegidas)
router.post('/', protect, createMusicRelease);
router.put('/:id', protect, updateMusicRelease);
router.delete('/:id', protect, deleteMusicRelease);

module.exports = router;
