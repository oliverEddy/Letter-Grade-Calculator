const getLetterGrade = (gradeScale, mark, level) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }

  if (mark === undefined || mark < 0 || mark > 100) {
    throw new Error(
      "Invalid mark provided, please use a number between 0 and 100"
    );
  }

  if (level === undefined || level < 5 || level > 6) {
    throw new Error("Invalid level provided, please use 5 or 6.");
  }

  if (level === "Level 5") {
    const grades = gradeScale.filter((item) => item.level === "Level 5");

    const found = grades.find((item) => {
      return mark <= item.maxMark && mark >= item.minMark;
    });
    return found.grade;
  }

  if (level === "Level 6") {
    const grades = gradeScale.filter((item) => item.level === "Level 6");

    const found = grades.find((item) => {
      return mark <= item.maxMark && mark >= item.minMark;
    });
    return found.grade;
  }

  return "Error: Grade not found.";
};

module.exports = { getLetterGrade };
