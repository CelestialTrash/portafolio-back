// backend/routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser); // Usa esta ruta solo una vez para crear el usuario inicial
router.post('/login', loginUser);

module.exports = router;
