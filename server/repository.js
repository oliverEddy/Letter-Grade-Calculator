const db = require("./db");

module.exports = {
  getGradeScale: async () => {
    try {
      const result = await db.query(
        `SELECT level, grade,
         max_mark AS maxMark, 
         min_mark AS minMark 
         FROM grade_scale
        `
      );
      const gradeScale = result.rows;
      return res.json(gradeScale);
    } catch (err) {
      next(err);
    }
  },
};
