import { revertString } from "../../../utils/17.6/revertString_17.6.1.js";

describe("tests for revertString function", () => {
  it("should reverse string or say about null", () => {
    expect(revertString("abc")).toBe("cba");
    expect(revertString("")).toBe("string is null");
  });
});