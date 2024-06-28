const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear application/json
app.use(bodyParser.json());

// Servir el archivo HTML
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para recibir datos del ESP32
app.post('/recibir-datos', (req, res) => {
    const datos = req.body;
    console.log('Datos recibidos desde Arduino:', datos);
    // Aquí puedes procesar los datos recibidos según sea necesario

    // Emitir los datos a todos los clientes conectados
    io.emit('nuevos-datos', datos);

    res.status(200).json({ mensaje: 'Datos recibidos correctamente' });
});

// Iniciar el servidor
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

// Configurar WebSockets
const io = require('socket.io')(server);
