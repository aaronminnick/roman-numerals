import { exportAllDeclaration } from "@babel/types";
import { testPathPatternToRegExp } from "jest-util";
import romanConverter from "../src/roman";

describe('romanConverter', () => {

  test('should return false if not given a number', () => {
    expect(romanConverter('salt')).toEqual(false);
    expect(romanConverter(true)).toEqual(false);
    expect(romanConverter(NaN)).toEqual(false);
    expect(romanConverter(Infinity)).toEqual(false);
    expect(romanConverter([1, 2])).toEqual(false);
  });

  test("should return 'Numbers higher than 3999 cannot be converted to Roman Numerals.' if given a number > 3999", () =>  {
    expect(romanConverter(4000)).toEqual("Numbers higher than 3999 cannot be converted to Roman Numerals.");
  });

  test('should return the equivalent string of Roman numerals when given a number', () => {
    expect(romanConverter(15)).toEqual('XV');
  });
  test("should return 'Roman Numerals don't account for zero' when given the number 0", () => {
    expect(romanConverter(0)).toEqual("Roman Numerals don't account for zero");
  });
});