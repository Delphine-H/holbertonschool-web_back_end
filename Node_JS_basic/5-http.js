const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents('database.csv'); // Use the correct path for the database
      res.end(`${data.join('\n')}`);
    } catch (error) {
      res.statusCode = 500; // Internal Server Error
      res.end(error.message);
    }
  } else {
    res.statusCode = 404; // Not Found
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
