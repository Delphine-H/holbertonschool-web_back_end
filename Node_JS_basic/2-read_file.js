const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      console.log('No students found');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
