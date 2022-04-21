function solution(a) {
  let teamOne = 0;
  let teamTwo = 0;
  let totalArray = [];
  
  for (let i = 0; i < a.length; i++) {
      if (i % 2 === 0) {
          teamOne += a[i]
      } else {
          teamTwo += a[i]
      }
  }
  totalArray.push(teamOne);
  totalArray.push(teamTwo);
  
  return totalArray;
}