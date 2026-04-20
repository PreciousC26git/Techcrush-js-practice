function gradeScore(score) {
  if (score >= 70 && score <= 100) return 'A';
  if (score >= 60) return 'B';
  if (score >= 50) return 'C';
  if (score >= 40) return 'D';
  return 'F';
}

// Tests
console.log(gradeScore(85)); 
console.log(gradeScore(62)); 
console.log(gradeScore(45)); 
console.log(gradeScore(30)); 