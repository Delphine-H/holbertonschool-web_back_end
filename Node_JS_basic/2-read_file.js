const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch {
    throw new Error('Cannot load the database');
  }

  const lines = data.trim().split('\n').slice(1); // Exclude header
  const fields = lines.reduce((acc, line) => {
    const [firstname, field] = line.split(',');
    if (firstname && field) {
      if (!acc[field]) acc[field] = [];
      acc[field].push(firstname);
    }
    return acc;
  }, {});

  const totalStudents = Object.values(fields).flat().length;

  console.log(`Number of students: ${totalStudents}`);
  for (const [field, names] of Object.entries(fields)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
