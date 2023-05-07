import { describe, expect, it } from "vitest";
import { duplicateCount, duplicateCount2 } from ".";

describe("duplicateCount", () => {
  it("Fixed tests", () => {
    expect(duplicateCount("")).toStrictEqual(0);
    expect(duplicateCount("abcde")).toStrictEqual(0);
    expect(duplicateCount("aabbcde")).toStrictEqual(2);
    expect(duplicateCount("aabBcde")).toStrictEqual(2);
    expect(duplicateCount("Indivisibility")).toStrictEqual(1);
    expect(duplicateCount("Indivisibilities")).toStrictEqual(2);
  });
});

describe("duplicateCount2", () => {
  it("Fixed tests", () => {
    expect(duplicateCount2("")).toStrictEqual(0);
    expect(duplicateCount2("abcde")).toStrictEqual(0);
    expect(duplicateCount2("aabbcde")).toStrictEqual(2);
    expect(duplicateCount2("aabBcde")).toStrictEqual(2);
    expect(duplicateCount2("Indivisibility")).toStrictEqual(1);
    expect(duplicateCount2("Indivisibilities")).toStrictEqual(2);
  });
});
