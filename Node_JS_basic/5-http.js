const http = require('http');
const countStudents = require('./3-read_file_async');

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  res.statusCode = 200; // Set response status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set response content type to plain text

  // If the URL path is '/', respond with "Hello Holberton School!"
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      // Call the countStudents function with the database file passed as an argument
      const data = await countStudents(process.argv[2]);
      res.end(`${data.join('\n')}`); // Send the list of students
    } catch (error) {
      // If there is an error, send the error message as the response
      res.end(error.message);
    }
  } else {
    // End the response if no matching route
    res.end();
  }
}); 

// Make the server listen on port 1245
app.listen(1245);

// Export the app for potential use in other files
module.exports = app;
