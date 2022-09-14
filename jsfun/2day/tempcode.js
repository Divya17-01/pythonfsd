let target = 11;
let arr1=[1,2,3,7,9];
function binarySearch(start, end) {
  let mid = parseInt((start + end) / 2);
  if (start === end) {
    return start;
  } else if (arr1[mid] === target) {
    return mid;
  } else if (arr1[mid] < target) {
    return binarySearch(mid + 1, end);
  } else if (arr1[mid] > target) {
    return binarySearch(start, mid);
  } else {
    return -1;
  }
}

console.log(binarySearch(0,arr1.length-1));