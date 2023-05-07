import { describe, expect, it } from "vitest";
import { toCamelCase, toCamelCase2 } from ".";

describe("toCamelCase", () => {
  it("should able to convert string to camel case", () => {
    expect(toCamelCase("")).toEqual("");
    expect(toCamelCase("the-stealth-warrior")).toEqual("theStealthWarrior");
    expect(toCamelCase("The-Stealth-Warrior")).toEqual("TheStealthWarrior");
    expect(toCamelCase("A-B-C")).toEqual("ABC");
    expect(toCamelCase("david Domingos de faria")).toEqual(
      "davidDomingosDeFaria"
    );
    expect(toCamelCase("1ab cde3 4f 5ghi")).toEqual("1abCde34f5ghi");
  });
});

describe("toCamelCase2", () => {
  it("should able to convert string to camel case", () => {
    expect(toCamelCase2("")).toEqual("");
    expect(toCamelCase2("the-stealth-warrior")).toEqual("theStealthWarrior");
    expect(toCamelCase2("The-Stealth-Warrior")).toEqual("TheStealthWarrior");
    expect(toCamelCase2("A-B-C")).toEqual("ABC");
    expect(toCamelCase2("david Domingos de faria")).toEqual(
      "davidDomingosDeFaria"
    );
    expect(toCamelCase2("1ab cde3 4f 5ghi")).toEqual("1abCde34f5ghi");
  });
});
