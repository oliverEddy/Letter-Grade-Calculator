import { getLetterGrade } from "./utils";

const gradeScale = [
  {
    level: "Level 5",
    minMark: 90,
    maxMark: 100,
    grade: "A+",
  },
  {
    level: "Level 5",
    minMark: 85,
    maxMark: 89,
    grade: "A",
  },
  {
    level: "Level 5",
    minMark: 80,
    maxMark: 84,
    grade: "A-",
  },
  {
    level: "Level 5",
    minMark: 75,
    maxMark: 79,
    grade: "B+",
  },
  {
    level: "Level 5",
    minMark: 70,
    maxMark: 74,
    grade: "B",
  },
  {
    level: "Level 5",
    minMark: 65,
    maxMark: 69,
    grade: "B-",
  },
  {
    level: "Level 5",
    minMark: 60,
    maxMark: 64,
    grade: "C+",
  },
  {
    level: "Level 5",
    minMark: 55,
    maxMark: 59,
    grade: "C",
  },
  {
    level: "Level 5",
    minMark: 50,
    maxMark: 54,
    grade: "C-",
  },
  {
    level: "Level 5",
    minMark: 40,
    maxMark: 49,
    grade: "D",
  },
  {
    level: "Level 5",
    minMark: 0,
    maxMark: 39,
    grade: "E",
  },
  {
    level: "Level 6",
    minMark: 92,
    maxMark: 100,
    grade: "A+",
  },
  {
    level: "Level 6",
    minMark: 85,
    maxMark: 91,
    grade: "A",
  },
  {
    level: "Level 6",
    minMark: 80,
    maxMark: 84,
    grade: "A-",
  },
  {
    level: "Level 6",
    minMark: 75,
    maxMark: 79,
    grade: "B+",
  },
  {
    level: "Level 6",
    minMark: 70,
    maxMark: 74,
    grade: "B",
  },
  {
    level: "Level 6",
    minMark: 65,
    maxMark: 69,
    grade: "B-",
  },
  {
    level: "Level 6",
    minMark: 60,
    maxMark: 64,
    grade: "C+",
  },
  {
    level: "Level 6",
    minMark: 55,
    maxMark: 59,
    grade: "C",
  },
  {
    level: "Level 6",
    minMark: 50,
    maxMark: 54,
    grade: "C-",
  },
  {
    level: "Level 6",
    minMark: 40,
    maxMark: 49,
    grade: "D",
  },
  {
    level: "Level 6",
    minMark: 0,
    maxMark: 39,
    grade: "E",
  },
];

describe("getLetterGrade", () => {
  test.todo("Test happy path scenarios");
  test.todo("Test negative scenarios");

  test("Throws an error for invalid gradeScale", () => {
    const corruptGradeScale = {};
    const mark = 70;
    const level = "Level 5";
    expect(() => getLetterGrade(corruptGradeScale, mark, level)).toThrow(
      "Grade scale not provided."
    );
  });

  it.each([
    ["A+", 90, 5],
    ["A", 88, 5],
    ["A-", 82, 5],
    ["B+", 78, 5],
    ["B", 72, 5],
    ["B-", 68, 5],
    ["C+", 62, 5],
    ["C", 58, 5],
    ["C-", 52, 5],
    ["D", 48, 5],
    ["E", 39, 5],
    ["A+", 92, 6],
    ["A", 88, 6],
    ["A-", 84, 6],
    ["B+", 78, 6],
    ["B", 74, 6],
    ["B-", 68, 6],
    ["C+", 64, 6],
    ["C", 58, 6],
    ["C-", 54, 6],
    ["D", 48, 6],
    ["E", 39, 6],
  ])(
    "getLetterGrade function should return %s letter grade based on user inputs, mark %s and level %s",
    (expectedGrade, inputMark, inputLevel) => {
      const util = gradeScale;

      const resultGrade = getLetterGrade(util, inputMark, inputLevel);
      expect(resultGrade).toBe(expectedGrade);
    }
  );

  it.each([
    [101, 5],
    [-101, 5],
    [undefined, 5],
  ])(
    "getLetterGrade function should return an error message if mark is not between 1 and 100",
    (mark, level) => {
      const util = gradeScale;

      const expectedError =
        "Invalid mark provided, please use a number between 0 and 100";

      expect(() => getLetterGrade(util, mark, level)).toThrow(expectedError);
    }
  );

  it.each([
    [50, 4],
    [50, 7],
    [50, undefined],
  ])(
    "getLetterGrade function should return an error message if level is not 5 or 6",
    (mark, level) => {
      const util = gradeScale;

      const expectedError = "Invalid level provided, please use 5 or 6.";

      expect(() => getLetterGrade(util, mark, level)).toThrow(expectedError);
    }
  );
});

// mark -1 101 "1" undefined yes yes
// level "level 4" "" undefined yes yes no
// the string "" "1" errors have not been done
