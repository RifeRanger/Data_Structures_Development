function failureIndex(sequence) {
  let index = null;
  for (let i = 0; i < sequence.length -1; i++) {
      if (sequence[i] >= sequence[i + 1]) {
          index = i;
          break;
      }
  }
  return index;
}

function solution(sequence) {

  let i = failureIndex(sequence);
  if (i == null) return true;

  let tempSlice1 = sequence.slice(0);
  tempSlice1.splice(i, 1);
  if (failureIndex(tempSlice1) == null) return true;
  
  let tempSlice2 = sequence.slice(0);
  tempSlice2.splice(i + 1, 1);
  if (failureIndex(tempSlice2) == null) return true;
  
  return false;

}



// const isStrictlyIncreasing = (arr) => {
//   let unwantedElements = 0;
//   for(let i = 0; i < arr.length - 1; i++){
//      if(arr[i] >= arr[i+1]){
//         unwantedElements++;
//         if(unwantedElements > 1){
//            return false;
//         };
//      };
//   };
//   return true;
// };
// console.log(isStrictlyIncreasing([1, 3, 2, 1]));
// console.log(isStrictlyIncreasing([1, 3, 2]));



// const arr = [12, 45, 6, 4, 23, 23, 21, 1];
// const arr2 = [12, 45, 67, 89, 123, 144, 2656, 5657];
// const sameSlope = (a, b, c) => (b - a < 0 && c - b < 0) || (b - a > 0 && c
// - b > 0);
// const increasingOrDecreasing = (arr = []) => {
//    if(arr.length <= 2){
//       return true;
//    };
//    for(let i = 1; i < arr.length - 1; i++){
//       if(sameSlope(arr[i-1], arr[i], arr[i+1])){
//          continue;
//       };
//       return false;
//    };
//    return true;
// };
// console.log(increasingOrDecreasing(arr));
// console.log(increasingOrDecreasing(arr2));




// function almostIncreasingSequence(sequence) {
//   var found = false;
//   for (var i=0;i<sequence.length;i++) {
//     if(sequence[i] <= sequence[i-1]) {
//       if(found) {
//         return false;
//       }
//       found = true;
      
//       if(i === 1 || i + 1 === sequence.length) {
//         continue;
//       }
//       else if (sequence[i] > sequence[i-2]) {
//         sequence[i-1] = sequence[i-2];
//       }
//       else if(sequence[i-1] >= sequence[i+1]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }