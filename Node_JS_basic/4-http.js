const http = require('http');

// Création du serveur HTTP
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Code de statut HTTP 200 OK
  res.setHeader('Content-Type', 'text/plain'); // Type de contenu : texte brut
  res.end('Hello Holberton School!'); // Réponse envoyée au client
});

// Le serveur écoute sur le port 1245
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
