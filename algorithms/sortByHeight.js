function sortByHeight(a) {
  let trees = []
  let nums = []
  
  for (let i = 0; i < a.length; i++) {
      if (a[i] === -1) {
          trees.push(i)
      } else {
          nums.push(a[i]);
      }
  }
  
  nums.sort((a,b) => a - b);
  
  
  for (let i = 0; i < trees.length; i++) {
      nums.splice(trees[i], 0, -1);
  }
      
  return nums;
}