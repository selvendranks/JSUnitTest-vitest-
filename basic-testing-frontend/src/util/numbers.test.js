import { it, expect, describe } from "vitest";
import { transformToNumber } from "./numbers";
import { cleanNumbers } from "./numbers";

describe("check if the number is being convertable", () => {
  it("check if the number string converted to number", () => {
    //arrange
    const value = "4";
    //action
    const result = transformToNumber(value);
    //assert
    expect(result).toBe(4).toBeTypeOf("number");
  });

  it("check if any word is converted to number", () => {
    //arrange
    const value = "bot";

    //action
    const result = transformToNumber(value);
    //assert
    expect(result).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("should return a array of numbers if array of string numbers is povided", () => {
    const stringArray = ["1", "4", "5"];
    let result = cleanNumbers(stringArray);
    expect(result).toEqual(10);
  });

  it('should throw error if empty strings are passed',()=>{
    const numbers = ['',23]
    const func = ()=> cleanNumbers()
    expect(func).toThrow()
  })
});
