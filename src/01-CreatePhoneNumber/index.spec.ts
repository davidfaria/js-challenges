import { describe, expect, it } from "vitest";
import { createPhoneNumber, createPhoneNumber2 } from ".";

describe("createPhoneNumber", () => {
  it("Fixed tests", () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toStrictEqual(
      "(123) 456-7890"
    );
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual(
      "(111) 111-1111"
    );
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toStrictEqual(
      "(123) 456-7890"
    );
  });
});

describe("createPhoneNumber2", () => {
  it("Fixed tests", () => {
    expect(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toStrictEqual(
      "(123) 456-7890"
    );
    expect(createPhoneNumber2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toStrictEqual(
      "(111) 111-1111"
    );
    expect(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toStrictEqual(
      "(123) 456-7890"
    );
  });
});
