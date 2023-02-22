export function revertString(str) {
    let revertedStr = "";
    if (str) {
      for (let i = str.length - 1; i >= 0; i--) {
        revertedStr += str[i];
    }
    return revertedStr;} else {return "string is null"}
  }