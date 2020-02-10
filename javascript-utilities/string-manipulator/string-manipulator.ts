export class StringManipulator {
  static concat(stringOne: string, stringTwo: string): string {
    return stringOne.concat(stringTwo);
  }

  static combine(stringOne: string, stringTwo: string, isCaseSenstive?: Boolean): string {
    return this.stripStringOfDuplicates(stringOne, stringTwo, isCaseSenstive);
  }

  static combineList(list: Array<string>, isCaseSenstive?: Boolean): string {
    let result = '';
    list.forEach(aString => {
      result = this.stripStringOfDuplicates(result, aString, isCaseSenstive);
    })

    return result;
  }

  private static charNotFound(aString: string, char: string): Boolean {
    return aString.indexOf(char) === -1;
  } 

  private static stripStringOfDuplicates(stringOne, stringTwo, isCaseSenstive) {
    let result = stringOne;

    stringTwo.split('').forEach((char) => {
      let inputValue = stringOne;
      let aChar = char;

      if (!isCaseSenstive) {
        inputValue = inputValue.toLowerCase();
        aChar = aChar.toLowerCase();
      }

      if (this.charNotFound(result, aChar)) {
        result += char;
      }
    });

    return result;
  }
}