const { parse } = require('csv-parse/sync');
const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const records = parse(data, {
      columns: true,
      skip_empty_lines: true,
    });

    const studentsByField = {};

    records.forEach((record) => {
      const { field } = record;
      const firstName = record.firstname;

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }

      studentsByField[field].push(firstName);
    });

    return studentsByField;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { readDatabase };
