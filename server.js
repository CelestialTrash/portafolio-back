// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const musicRoutes = require('./routes/musicRoutes');
const devRoutes = require('./routes/devRoutes');
const soundDesignRoutes = require('./routes/soundDesignRoutes');
const authRoutes = require('./routes/authRoutes'); // Ruta de autenticación
const { protect } = require('./middleware/authMiddleware'); // Middleware de autenticación

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rutas públicas
app.use('/api/music', musicRoutes);
app.use('/api/dev', devRoutes);
app.use('/api/sound-design', soundDesignRoutes);

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Rutas protegidas para edición de contenido
app.use('/api/music/admin', protect, musicRoutes);
app.use('/api/dev/admin', protect, devRoutes);
app.use('/api/sound-design/admin', protect, soundDesignRoutes);

app.get('/', (req, res) => {
    res.send('API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
