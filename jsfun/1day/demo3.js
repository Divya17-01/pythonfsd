unction checkPalidrome(num) {
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
  