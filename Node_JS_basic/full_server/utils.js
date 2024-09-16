import fs from 'fs';
import { parse } from 'csv-parse/sync';

export default function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, fileContent) => {
      if (err) {
        return reject(err);
      }
      try {
        const records = parse(fileContent, { columns: true, skip_empty_lines: true });
        const students = {};
        records.forEach((record) => {
          if (!students[record.field]) students[record.field] = [];
          students[record.field].push(record.firstname);
        });
        return resolve(students);
      } catch (parseError) {
        return reject(parseError);
      }
    });
  });
}
