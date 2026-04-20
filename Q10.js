function gradeScore(score) {
  if (score >= 70 && score <= 100) return 'A';
  if (score >= 60) return 'B';
  if (score >= 50) return 'C';
  if (score >= 40) return 'D';
  return 'F';
}

function summarizeStudent(students) {
  return students.map(student => {
    const grade = gradeScore(student.score);
    return `${student.name} scored ${student.score} — Grade: ${grade}`;
  });
}

const students = [
  { name: 'Amara', score: 88 }];
console.log(summarizeStudent(students));
