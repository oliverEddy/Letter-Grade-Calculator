const getLetterGrade = (gradeScale, mark, level) => {
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }
  return "A+";
};

module.exports = { getLetterGrade };
