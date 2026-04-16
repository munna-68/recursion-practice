import { fibs, fibsRec } from "../src/fibonacci.js";

describe("fibs", () => {
  test("returns [0] for n = 1", () => {
    expect(fibs(1)).toEqual([0]);
  });

  test("returns [0, 1] for n = 2", () => {
    expect(fibs(2)).toEqual([0, 1]);
  });

  test("returns first 8 fibonacci numbers for n = 8", () => {
    expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});

describe("fibsRec", () => {
  test("returns [0] for n = 1", () => {
    expect(fibsRec(1)).toEqual([0]);
  });

  test("returns [0, 1] for n = 2", () => {
    expect(fibsRec(2)).toEqual([0, 1]);
  });

  test("returns first 8 fibonacci numbers for n = 8", () => {
    expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
