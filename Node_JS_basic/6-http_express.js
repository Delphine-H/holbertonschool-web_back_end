// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the endpoint /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Send the response
});

// Make the application listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the application
module.exports = app;
