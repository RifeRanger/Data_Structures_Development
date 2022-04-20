function isLucky(n) {
  let numString = n.toString();
  let firstHalf = numString.slice(0, numString.length / 2);
  let secondHalf = numString.slice(numString.length / 2, numString.length);
  
  let firstHalfSum = 0;
  let secondHalfSum = 0;
  
  for (let i = 0; i < firstHalf.length; i++) {
      firstHalfSum += parseInt(firstHalf[i]);
      secondHalfSum += parseInt(secondHalf[i]);
  }

  if (firstHalfSum === secondHalfSum) {
      return true;
  } else {
      return false;
  }
}