const express = require('express');
const app = express();
const port = 3000;

// Définir une route de base
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});