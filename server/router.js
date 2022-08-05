const express = require("express");
const router = express.Router();
const repository = require("./repository")

router.get("/", async (req, res, next) => {
  try {
    const result = await repository.getGradeScale()
    res.json(result)
  } catch (err) {
    next(err);
  }
});

module.exports = router;
