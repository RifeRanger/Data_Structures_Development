function solution(inputString) {
  let palindromeBoolean = false;
  if (palindromeCheck(inputString)) {
      return true;
  } else if (!palindromeCheck(inputString)) {
      let last = inputString.length - 1;
      for (let i = 0; i < inputString.length / 2; i++) {
          while (i <= last) {
              if (inputString[i] !== inputString[last]) {
                  let swapFirst = inputString[last - 1];
                  let swapSecond = inputString[last];
                  inputString[last - 1] = swapSecond;
                  inputString[last] = swapFirst;
              } else if (inputString[i] !== inputString[last]) {
                  last --;
              }
          }
      }
      palindromeCheck(inputString)
  }
  return palindromeBoolean;
}

function palindromeCheck(string) {
  let first = 0;
  let last = string.length - 1;
  let palindromeBoolean = false;
  
  while (first <= last) {
      if (string[first] !== string[last]) {
          return false;
      } else if (string[first] === string[last]) {
          palindromeBoolean = true;
          first++;
          last--;
      }
  }
  return palindromeBoolean;
}
