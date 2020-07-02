const { validBraces } = require("./valid_braces.js")

describe("Valid Braces", () => {

  test("to test for error", () => {
    try {expect(validBraces('')).toThrow('Please provide an input');}
    catch (err) {}
  });

  test("to test for error", () => {
    expect(() => validBraces('')).toThrow('Please provide an input');
  });

  test("to test open bracket", () => {
    expect(validBraces("[")).toBeFalsy();
  });

  test("to test open brackets", () => {
    expect(validBraces("{{[[")).toBeFalsy();
  });

  test("to test close bracket", () => {
    expect(validBraces("[]")).toBeTruthy();
  });

  test("to test close brackets", () => {
    expect(validBraces("{}[]")).toBeTruthy();
  });

  test("to test close brackets in series", () => {
    expect(validBraces("{{[]}}")).toBeTruthy();
  });
});

