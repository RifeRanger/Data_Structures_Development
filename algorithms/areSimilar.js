function solution(a, b) {
  let similarBoolean = false;
  let counter = 0;
  for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
          similarBoolean = true;
      } else if (a[i] !== b[i] && counter < 1) {
          counter++;
          if (a[i] === b[i + 1] && a[i + 1] === b[i]) {
              let swapFirst = a[i];
              let swapSecond = a[i + 1];
              a[i + 1] = swapFirst;
              a[i] = swapSecond;
              similarBoolean = true;
          } else if (a[i] === b[i + 2] && a[i + 2] === b[i]) {
              let swapFirst = a[i];
              let swapSecond = a[i + 2];
              a[i + 2] = swapFirst;
              a[i] = swapSecond;
              similarBoolean = true;
          }
      } else if (a[i] !== b[i] && counter > 0) {
          return false;
      }
  }
  console.log(a, b)
  return similarBoolean;
}