function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0
    }
    let first = 0
    let second = 1
    while (second <= arr.length - 1) {
        if (arr[first] !== arr[second]) {
            first++
            second++
            arr[first] = arr[second]
        } else if (arr[first] === arr[second]) {
            second++
        }
    }
    return first + 1
}

function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}