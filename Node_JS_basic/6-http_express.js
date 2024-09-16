const express = require('express');

const app = express();

// Define the root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a catch-all route for any endpoint not explicitly defined
app.use((req, res) => {
  res.status(404).send(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body><pre>Cannot GET ${req.url}</pre></body></html>`);
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
