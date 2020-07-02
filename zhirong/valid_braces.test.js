const { validBraces } = require("./valid_braces.js")

describe("valid braces", () => {
  it("should return true when []", () => {
    const result = validBraces('[]')
    expect(result).toEqual(true)
  });
  it("should return false when [", () => {
    const result = validBraces('[')
    expect(result).toEqual(false)
  });
  it("should return false when (", () => {
    const result = validBraces('(')
    expect(result).toEqual(false)
  });
  it("should return true when ()", () => {
    const result = validBraces('()')
    expect(result).toEqual(true)
  });
  it("should return true when [()]", () => {
    const result = validBraces('[()]')
    expect(result).toEqual(true)
  });
  it("should return true when {[()]}", () => {
    const result = validBraces('{[()]}')
    expect(result).toEqual(true)
  });
  it("should return false when {[(", () => {
    const result = validBraces('{[(')
    expect(result).toEqual(false)
  });
  it("should return exception when ''", () => {
    // const result = validBraces('')
    expect(() => validBraces('')).toThrow(Error)
  });
  it("should also return exception when ''", () => {
    try {
        validBraces('')
    } catch (error) {
        expect(error.message).toEqual('Please provide an input')
    }
  });
});