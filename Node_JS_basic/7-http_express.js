// Import the Express module
const express = require('express');
const fs = require('fs');
const { parse } = require('csv-parse/sync'); // For parsing CSV files

// Create an Express application
const app = express();

// Function to read and parse CSV file
const countStudents = (databasePath) => {
  try {
    // Read the CSV file
    const fileContent = fs.readFileSync(databasePath);

    // Parse CSV file
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
    });

    const students = {
      CS: [],
      SWE: [],
    };

    // Process each record
    records.forEach((record) => {
      if (record.field1 && record.field2) { // Assuming CSV has fields field1 and field2
        if (record.field2 === 'CS') students.CS.push(record.field1);
        else if (record.field2 === 'SWE') students.SWE.push(record.field1);
      }
    });

    // Generate output
    const numCS = students.CS.length;
    const numSWE = students.SWE.length;
    const listCS = students.CS.join(', ');
    const listSWE = students.SWE.join(', ');

    return Promise.resolve([
      `Number of students: ${numCS + numSWE}`,
      `Number of students in CS: ${numCS}. List: ${listCS}`,
      `Number of students in SWE: ${numSWE}. List: ${listSWE}`,
    ]);
  } catch (error) {
    return Promise.reject(error);
  }
};

// Define a route for the endpoint /
app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Send the response
});

// Define a route for the endpoint /students
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2]; // Get the database file path from command line arguments

  try {
    // Read and parse the students from the database
    const data = await countStudents(databasePath);
    res.send(['This is the list of our students', ...data].join('\n'));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Make the application listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the application
module.exports = app;
