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

/*
const localGradeScale = [
  { level: "Level 5", grade: "A+", maxMark: 100, minMark: 90 },
  { level: "Level 5", grade: "A", maxMark: 89, minMark: 85 },
  { level: "Level 5", grade: "A-", maxMark: 84, minMark: 80 },
  { level: "Level 5", grade: "B+", maxMark: 79, minMark: 75 },
  { level: "Level 5", grade: "B", maxMark: 74, minMark: 70 },
  { level: "Level 5", grade: "B-", maxMark: 69, minMark: 65 },
  { level: "Level 5", grade: "C+", maxMark: 64, minMark: 60 },
  { level: "Level 5", grade: "C", maxMark: 59, minMark: 55 },
  { level: "Level 5", grade: "C-", maxMark: 54, minMark: 50 },
  { level: "Level 5", grade: "D", maxMark: 49, minMark: 40 },
  { level: "Level 5", grade: "E", maxMark: 39, minMark: 0 },
  { level: "Level 6", grade: "A+", maxMark: 100, minMark: 92 },
  { level: "Level 6", grade: "A", maxMark: 91, minMark: 85 },
  { level: "Level 6", grade: "A-", maxMark: 84, minMark: 80 },
  { level: "Level 6", grade: "B+", maxMark: 79, minMark: 75 },
  { level: "Level 6", grade: "B", maxMark: 74, minMark: 70 },
  { level: "Level 6", grade: "B-", maxMark: 69, minMark: 65 },
  { level: "Level 6", grade: "C+", maxMark: 64, minMark: 60 },
  { level: "Level 6", grade: "C", maxMark: 59, minMark: 55 },
  { level: "Level 6", grade: "C-", maxMark: 54, minMark: 50 },
  { level: "Level 6", grade: "D", maxMark: 49, minMark: 40 },
  { level: "Level 6", grade: "E", maxMark: 39, minMark: 0 }
];

 const getLetterGrade = (gradeScale, mark, level) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }

  if (level === 5) {
    const levelFiveGradeScales = gradeScale.filter(
      (item) => item.level === "Level 5"
    );

    const found = levelFiveGradeScales.find((item) => {
      return mark <= item.maxMark && mark >= item.minMark;
    });
    return found.grade;
  }

  if (level === 6) {
    const levelSixGradeScales = gradeScale.filter(
      (item) => item.level === "Level 6"
    );

    const found = levelSixGradeScales.find((item) => {
      return mark <= item.maxMark && mark >= item.minMark;
    });
    return found.grade;
  }
};



 module.exports = { getLetterGrade };
 */
