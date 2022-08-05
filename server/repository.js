const db = require("./db");

module.exports = {
  getGradeScale: async () => {
    const result = await db.query(
      `SELECT level, grade,
         max_mark AS "maxMark", 
         min_mark AS "minMark" 
         FROM grade_scale
        `
    );
    return result.rows;
  },
};
