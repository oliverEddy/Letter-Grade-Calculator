const getLetterGrade = (gradeScale, mark, level) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    // return results = gradeScale.filter((gradeScale) =>
    // )
    //  return results = gradeScale.find((gradeScale) =>
    // )

    throw new Error("Grade scale not provided.");
  }
  if (mark >= 90 && (level = 5)) {
    return "A+";
  }
  if (mark <= 89 && mark >= 85 && (level = 5)) {
    return "A";
  }
  if (mark <= 84 && mark >= 80 && (level = 5)) {
    return "A-";
  }
  if (mark <= 79 && mark >= 75 && (level = 5)) {
    return "B+";
  }
  if (mark <= 74 && mark >= 70 && (level = 5)) {
    return "B";
  }
  if (mark <= 69 && mark >= 65 && (level = 5)) {
    return "B-";
  }
  if (mark <= 64 && mark >= 60 && (level = 5)) {
    return "C+";
  }
  if (mark <= 59 && mark >= 55 && (level = 5)) {
    return "C";
  }
  if (mark <= 54 && mark >= 50 && (level = 5)) {
    return "C-";
  }
  if (mark <= 49 && mark >= 40 && (level = 5)) {
    return "D";
  }
  if (mark <= 39 && (level = 5)) {
    return "E";
  }

  if (mark <= 100 && mark >= 92 && (level = 6)) {
    return "A+";
  }
  if (mark <= 91 && mark >= 85 && (level = 6)) {
    return "A";
  }
  if (mark <= 84 && mark >= 80 && (level = 6)) {
    return "A-";
  }
  if (mark <= 79 && mark >= 75 && (level = 6)) {
    return "B+";
  }
  if (mark <= 74 && mark >= 70 && (level = 6)) {
    return "B";
  }
  if (mark <= 69 && mark >= 65 && (level = 6)) {
    return "B-";
  }
  if (mark <= 64 && mark >= 60 && (level = 6)) {
    return "C+";
  }
  if (mark <= 59 && mark >= 55 && (level = 6)) {
    return "C";
  }
  if (mark <= 54 && mark >= 50 && (level = 6)) {
    return "C-";
  }
  if (mark <= 49 && mark >= 40 && (level = 6)) {
    return "D";
  }
  if (mark <= 39 && mark >= 0 && (level = 6)) {
    return "E";
  }
};
//
//console.log(gradeScale);
// console.log(mark);
// console.log(level);

module.exports = { getLetterGrade };
