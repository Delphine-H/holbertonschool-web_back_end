import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const databasePath = process.argv[2];
    try {
      const students = await readDatabase(databasePath);
      const sortedFields = Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
      let response = 'This is the list of our students\n';
      for (const field of sortedFields) {
        const list = students[field].join(', ');
        response += `Number of students in ${field}: ${students[field].length}. List: ${list}\n`;
      }
      return res.status(200).send(response.trim());
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databasePath = process.argv[2];
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const students = await readDatabase(databasePath);
      const list = students[major].join(', ');
      return res.status(200).send(`List: ${list}`);
    } catch (error) {
      return res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
