const romanArray = ["I", "V", "X", "L", "C", "D", "M"];

function romanConverter(number) {
  if (typeof number !== 'number' || number !== number || number === Infinity || number === -Infinity) {
    return false;
  }

  if (number > 3999) {
    return "Numbers higher than 3999 cannot be converted to Roman Numerals."
  }

  const numberAsArray = number.toString().split("");
  let outputString = "";
  let digitIndex = 0;

  for (let i = numberAsArray.length - 1; i >= 0; i--) {
    switch (numberAsArray[i]) {
      case '0':
        break;
      case '1':
        outputString = romanArray[digitIndex] + outputString;
        break;
      case '2':
        outputString = romanArray[digitIndex] + romanArray[digitIndex] + outputString;
        break;
      case '3':
        outputString = romanArray[digitIndex] + romanArray[digitIndex] + romanArray[digitIndex] + outputString;
        break;
      case '4':
        outputString = romanArray[digitIndex] + romanArray[digitIndex+1] + outputString;
        break;
      case '5':
        outputString = romanArray[digitIndex+1] + outputString;
        break;
      case '6':
        outputString = romanArray[digitIndex+1] + romanArray[digitIndex] + outputString;
        break;
      case '7':
        outputString = romanArray[digitIndex+1] + romanArray[digitIndex] + romanArray[digitIndex] + outputString;
        break;
      case '8':
        outputString = romanArray[digitIndex+1] + romanArray[digitIndex] + romanArray[digitIndex] + romanArray[digitIndex] + outputString;
        break;
      case '9':
        outputString = romanArray[digitIndex] + romanArray[digitIndex+2] + outputString;
        break;
      }
    digitIndex +=2;
  }

  return outputString;
}

romanConverter(4);