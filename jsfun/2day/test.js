let user = {};
user["name"] = "John";
user["surname"] = "Smith";
console.log(user);
if ("name" in user) {
    user["name"] = "Peter";
}
console.log(user);
delete user.name;
console.log(user);

// check empty or not

function isEmpty(params) {
    let count = 0
    for (let key in params) {
        count = count + 1;
    }
    if (count === 0) return true;
    return false;
}
let emptyObj = {}
console.log(isEmpty(emptyObj));
console.log(isEmpty(user));

//


function sumSalary(params) {
    let sum = 0;
    for (let key in params) {
        sum = sum + params[key];
    }
    return sum;
}
let obj9 = {
    "abc": 50000,
    "bc": 80000,
    "abd": 90000,
}
console.log(sumSalary(obj9));
//

let obj1 = { "a": 5, "b": "4", "c": "50", "d": 100 };
console.log(obj1);
for (let key in obj1) {
    if (typeof obj1[key] === "number") {
        obj1[key] = 5 * obj1[key];
    }
}

console.log(obj1);

//merge two sorted arrays


function merging(param1, param2) {
    let array = [];
    let i = 0;
    let j = 0;
    while (i < param1.length && j < param2.length) {
        if (param1[i] <= param2[j]) {
            array.push(param1[i]);
            i = i + 1;
        }
        else {
            array.push(param2[j])
            j = j + 1;
        }
    }
    while (i < param1.length) {
        array.push(param1[i]);
        i = i + 1;
    }
    while (j < param2.length) {
        array.push(param2[j]);
        j = j + 1;
    }
    return array;
}
let array1 = [1, 4, 9, 16, 25, 30];
let array2 = [5, 7, 11];
console.log(merging(array1, array2))
array1 = merging(array1, array2)
console.log(array1)



const arr = (param1, param2) => {
    let array = [];
    let i = 0;
    let j = 0;
    while (i < param1.length && j < param2.length) {
        if (param1[i] <= param2[j]) {
            array.push(param1[i]);
            i = i + 1;
        }
        else {
            array.push(param2[j])
            j = j + 1;
        }
    }
    while (i < param1.length) {
        array.push(param1[i]);
        i = i + 1;
    }
    while (j < param2.length) {
        array.push(param2[j]);
        j = j + 1;
    }
    return array;
}
let array3 = [1, 4, 9, 16, 25, 30];
let array4 = [5, 7, 11];
console.log(arr(array3, array4));


// factorial

function fact(params) {
    if (params <= 1) {
        return 1;
    }
    return params * fact(params - 1)

}
console.log(fact(5));
console.log(fact(15));
console.log(fact(1));
console.log(fact(0));
//binary Search

function binarySearch(input_array, target, i, j) {
    if (j >= i) {

        let mid = i + Math.floor((j - i) / 2);

        if (input_array[mid] == target) {
            return mid
        }

        else if (input_array[mid] > target) {
            return binarySearch(input_array, target, i, mid - 1)
        }
        else {
            return binarySearch(input_array, target, mid + 1, j)
        }
    }
    else {
        return -1
    }
}
let array5 = [1, 4, 9, 16, 25, 30];
console.log(binarySearch(array5, 25, 0, array5.length))
console.log(binarySearch(array5, 5, 0, array5.length))


let arr0 = [1, 2, 3, 4, 5, 6, 7, 8];

let target = 11;
let arr1 = [1, 2, 3, 7, 9];
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
console.log(binarySearch(0, arr1.length - 1));