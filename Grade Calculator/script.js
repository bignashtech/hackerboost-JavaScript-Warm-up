function getGradeAndComment(score) {
  // Handle invalid ranges first (optional but smart)
  if (typeof score !== "number" || Number.isNaN(score)) {
    return { grade: "N/A", comment: "Invalid input: score must be a number." };
  }

  if (score > 100) {
    return { grade: "N/A", comment: "Invalid score: cannot be above 100." };
  }

  if (score < 0) {
    return { grade: "N/A", comment: "Invalid score: cannot be below 0." };
  }

  // Else-if ladder (required)
  if (score >= 90) {
    return { grade: "A", comment: "Outstanding! Keep it up!" };
  } else if (score >= 80) {
    return { grade: "B", comment: "Very good – room to reach A" };
  } else if (score >= 70) {
    return { grade: "C", comment: "Good effort – aim higher next time" };
  } else if (score >= 60) {
    return { grade: "D", comment: "Passing – but needs improvement" };
  } else {
    return { grade: "F", comment: "You need to study more" };
  }
}

// Test of at least 6 different scores
const testScores = [59, 60, 89.9, 90, 100, -5, 105, "A+"];

for (const scores of testScores) {
  console.log(scores,  getGradeAndComment(scores));
}
