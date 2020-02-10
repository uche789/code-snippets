"use strict";
exports.__esModule = true;
var StringManipulator = /** @class */ (function () {
    function StringManipulator() {
    }
    StringManipulator.concat = function (stringOne, stringTwo) {
        return stringOne.concat(stringTwo);
    };
    StringManipulator.combine = function (stringOne, stringTwo, isCaseSenstive) {
        return this.stripStringOfDuplicates(stringOne, stringTwo, isCaseSenstive);
    };
    StringManipulator.combineList = function (list, isCaseSenstive) {
        var _this = this;
        var result = '';
        list.forEach(function (aString) {
            result = _this.stripStringOfDuplicates(result, aString, isCaseSenstive);
        });
        return result;
    };
    StringManipulator.charNotFound = function (aString, char) {
        return aString.indexOf(char) === -1;
    };
    StringManipulator.stripStringOfDuplicates = function (stringOne, stringTwo, isCaseSenstive) {
        var _this = this;
        var result = stringOne;
        stringTwo.split('').forEach(function (char) {
            var inputValue = stringOne;
            var aChar = char;
            if (!isCaseSenstive) {
                inputValue = inputValue.toLowerCase();
                aChar = aChar.toLowerCase();
            }
            if (_this.charNotFound(result, aChar)) {
                result += char;
            }
        });
        return result;
    };
    return StringManipulator;
}());
exports.StringManipulator = StringManipulator;
