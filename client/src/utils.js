const getLetterGrade = (gradeScale, mark, level) => {
  console.log(gradeScale);
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }
};

module.exports = { getLetterGrade };
