export default function updateStudentGradeByCity(listOfStudent, city, newGrades) {
  return listOfStudent.map((student) => {
    const item = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: item ? item.grade : 'N/A',
    };
  }).filter((student) => student.location === city);
}
