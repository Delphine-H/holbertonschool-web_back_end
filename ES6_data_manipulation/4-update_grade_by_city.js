function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
    // Find the grade object in newGrades that matches the student's ID
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      // If a matching grade object is found, use its grade; otherwise, use 'N/A'
      const grade = gradeObj ? gradeObj.grade : 'N/A';
      // Return a new student object with the added grade property
      return { ...student, grade };
    });
}

export default updateStudentGradeByCity;
