function largestSum(ls) {
    let sum = 0
    for (let i = 0; i < ls.length; i++) {
        let curr = 0
        for (let j = i; j < ls.length; j++) {
            curr = curr + ls[j]
            if (curr > sum)
                sum = curr
        }
    }
    return sum
}
let ls = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(largestSum(ls))