function solution(inputArray) {
  let moves = 0;
  console.log((strictlIncreasing(inputArray)));
  if (strictlIncreasing(inputArray)) {
      return moves;
  } else if (!strictlIncreasing(inputArray)) {
      for (let i = 0; i < inputArray.length; i++) {
          while (inputArray[i] >= inputArray[i + 1]) {
              inputArray[i + 1] += 1;
              moves++;
          }
      }
  }
  return moves;
}

function strictlIncreasing(checkArray) {
  let increasingBoolean = false;
  for (let i = 0; i < checkArray.length; i++) {
      if (checkArray[i] >= checkArray[i + 1]) {
          return false;
      } else {
          increasingBoolean = true;
      }
  }
  return increasingBoolean;
}