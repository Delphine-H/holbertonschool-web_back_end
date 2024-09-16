const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      if (lines.length <= 1) {
        console.log('No students found');
        resolve();
        return;
      }

      const students = lines.slice(1).map((line) => line.split(','));
      const fields = {};
      let totalStudents = 0;

      students.forEach((student) => {
        if (student.length > 0) { // Check for valid entries
          totalStudents += 1;
          const field = student[3]; // Assuming the 4th column contains the field (CS, SWE, etc.)
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(student[0]); // Assuming the 1st column contains the first names
        }
      });

      console.log(`Number of students: ${totalStudents}`);

      Object.keys(fields).forEach((field) => {
        const count = fields[field].length;
        const names = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${names}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
