var i, j, N;
N = 6;
for (i = 1; i <= N; i++) {
  console.log(" ".repeat(N - i) + "*".repeat(2 * i - 1));
}
for (i = 1; i <= N - 1; i++) {
  console.log(" ".repeat(i) + "*".repeat(2 * N - 2 * i - 1));
}

function checkPalidrome(num) {
  let result = num;
  let new_num = 0;
  let rem;
  while (num != 0) {
    rem = num % 10;
    new_num = new_num * 10 + rem;
    num = Math.floor(num / 10);
  }
  if (result === new_num) return true;
  return false;
}

console.log(checkPalidrome(121));
console.log(checkPalidrome(1221));
console.log(checkPalidrome(128921));

function checkPalidrome1(input_string) {
  const len = input_string.length;
  for (let i = 0; i <= Math.floor((len - 1) / 2); i++) {
    if (input_string[i] !== input_string[len - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkPalidrome1("121"));
console.log(checkPalidrome1("1221"));
console.log(checkPalidrome1("abccca"));

function romanToNumeric(r) {
  switch (r) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
}

function romantoInt(str1) {
  let result = 0;
  var i = 0;
  for (i = 0; i < str1.length - 1; i++) {
    var s1 = romanToNumeric(str1[i]);
    var s2 = romanToNumeric(str1[i + 1]);
    if (s1 >= s2) {
      result = result + s1;
    } else {
      result = result + s2 - s1;
    }
  }
  result = result + romanToNumeric(str1[i]);
  return result;
}

console.log(romantoInt("XXVI"));
console.log(romantoInt("CCCL"));