function twoSum(array, target) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) {
          result.push([i, j]);
        }
      }
    }
    if (result.length === 0) return [-1, -1];
    return result;
  }
  
  let array = [1, 2, 3, 4, 5, 6];
  target = 9;
  console.log(twoSum(array, target));