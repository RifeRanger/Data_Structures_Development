function commonCharsCount(s1, s2) {
  let commonChars = {};
  console.log(s1)
  for (let i = 0; i < s1.length; i++) {
      for (let j = 0; j < s2.length; j++) {
          if (s1.charAt(i) === s2.charAt(j) && commonChars[s1.charAt(i)] === null) {
              console.log(s1.charAt(i));
              commonChars[s1.charAt(i)] = 1;
              // s1.pop(s1.charAt(s1[i]));
          } else if (s1.charAt(i) === s2.charAt(j) && commonChars[s1.charAt(i)] != null) {
              commonChars[s1.charAt(i)] += 1;
              // s1.pop(s1.charAt(i));
          }
      }
  }
  return commonChars.length;
}



function solution(s1, s2) {
  let commonChars = {};
  for (let i in s1) {
      s2.includes(s1[i]) ? (commonChars[s1[i]] >= 1 ?  commonChars[s1[i]] += 1 : commonChars[s1[i]] = 1) : false;
  }
  
  console.log(commonChars)
  return commonChars.length;
}