# _Roman Numerals_

#### _EPICODUS PRACTICE: w3:38_

#### By
* _**Ella Tanttu**_
* _**Aaron Minnick**_

## Technologies Used

* _CSS_
* _HTML_
* _JAVAscript_

## Description

_Click here to see exercise: https://www.learnhowtoprogram.com/introduction-to-programming/arrays-and-looping/practice-roman-numerals_

## Setup/Installation Requirements

* _Navigate to https://github.com/aaronminnick/roman-numerals.git in your browser_
* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Connect to your github repository_
* _open roman-numerals/index.html in your browser_
* _Open files in VS Code to edit_

## Known Bugs

_No known issues_

## License

_{MIT Copyright (c) 2021 Ella Tanttu, Aaron Minnick}_
_(https://opensource.org/licenses/MIT)_

## Contact Information

_Ella Tanttu ellajtanttu@gmail.com_
_Aaron Minnick abminnick@gmail.com_

# _Specs_
- Write a method to convert numbers into Roman numerals. Roman numerals are based on seven symbols:

|Symbol|Value|
|---|---|
|I|1|
|V|5|
|X|10|
|L|50|
|C|100|
|D|500|
|M|1000|

- The most basic rule is that you add the value of all the symbols: so II is 2, LXVI is 66, etc.
- The exception is that there may not be more than three of the same characters in a row. Instead, you switch to subtraction. So instead of writing IIII for 4, you write IV (for 5 minus 1); and instead of writing LXXXX for 90, you write XC.
- You also have to separate ones, tens, hundreds, and thousands. In other words, 99 is XCIX, not IC. You cannot count higher than 3,999 in Roman numerals.

<!--
function will add the value of the symbols
  -rule: symbols will not be added if three of the same in one row
  -rule: if 3+ in a row, switch to subtraction
  -add branching for each of the following:
    -ones
    -tens
    -hundreds
    -thousands
  -rule: max value = 3999
-->

<!-- Possible solution:

1. take a number and break it into thousands, hundreds, tens, and ones
example: 4321 > 4000, 300, 20, 1
2a. If the digit in that place is a nine, it's going to use a letter from the next order up, so punch that in now.
example: 1 = I, whereas 9 = IX, so we need to do it now (8 is VIII so it uses the letters for the "ones place")
2b. If the digit is 8 or less, its going to use numbers in its "place", so convert it accordingly.
3. Start with the thousands and work down, adding each stored value for a digit to the string

2597 = MMDXCVII
2000 = MM
 500 = D
  90 = XC
   7 = VII

letter convertor would need to know the 1 and 5 value for its current "place order" as well as the 1 value above it, for the case of 9:

letter(digit, one, five, nextOne) {
  if (arguments.length === 2) {
    return thousands
  }
  if digit === 1 > return one
  if digit === 2 > return one + one
  ...
  if digit === 9 > return one + nextOne
}

We will have a helper function called letter() which takes a digit to be converted, and one to three additional arguments. The second argument represents the letter to be used for a 1 value at the current order. The third argument represents the lettter to be used for 5, and the fourth for 10.In the case of only one additional argument, we will assume we are converting our thousands digit, because there only be "ones" at the thousand place. The function will return the letter equivalent for the digit given.

result = ""
result = result + letter(5, "C", "D", "M") //example of a function call for the hundreds place

362 = CCCLXII
3   = CCC
 6  = LX
  2 = II

222 = CCXXII

198 = CXCVIII

|I|1|
|V|5|
|X|10|
|L|50|
|C|100|
|D|500|
|M|1000|

# _TDD TESTS_



Describe: romanerminator()

Test: "Given a number it will return a string."
Code: romanerminator(1)
Expected Output: "I"

