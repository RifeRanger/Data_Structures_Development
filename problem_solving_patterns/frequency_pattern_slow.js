function freqPattern(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      let indexMatch = arr2.indexOf(arr1[i] ** 2)
      if (indexMatch === -1) {
        return false;
      }
      arr2.splice(indexMatch, 1)
    }
}

console.log(freqPattern([1,2,3,4,5],[25,16,9,4,1]))

