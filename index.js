// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear application/json
app.use(bodyParser.json());

// Ruta para recibir datos del dispositivo Arduino
app.post('/recibir-datos', (req, res) => {
    const datos = req.body;
    console.log('Datos recibidos desde Arduino:', datos);
    res.status(200).json({ mensaje: 'Datos recibidos correctamente' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

