
// find the minimum in the arr
function findMin(arr) {

    let min = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }

    return min
}


let arr = [10, 58, 5, 69]

let res = findMin(arr)

console.log(res)

// Input: x = 121
let x = 4


var isPalindrome = function (x) {
    let str = x.toString()


    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }

    return true

}




let result = isPalindrome(x)

console.log(result)





var maxSubArray = function (num) {

    let max = num[0]

    for (let i = 0; i < num.length; i++) {
        if (max > num[i]) {
            max = num[i]
        }
    }
    return max



};


let num = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// Output: 6


console.log(maxSubArray(num))



// check palindrome


let checkPalindrome = function (x) {
    let str = "" + x;

    let i = 0;
    let j = str.length - 1
    while (i <= j) {
        if (str[i] == str[j]) {
            i++

            j--
        } else {
            return false
        }
    }
    return true

}

let res2 = checkPalindrome(x)

console.log(res2)


// rearrange the array zero and one



let ArrangeArr = function (arr) {
    let zeroArr = [];
    let oneArr = [];

    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            oneArr.push(1)
        } else {

            zeroArr.push(0)
        }

    }



    return newArr = [...zeroArr, ...oneArr]
}
let arr2 = [1, 0, 0, 1, 0, 1, 0, 0, 0]


let res3 = ArrangeArr(arr2)

console.log(res3)


// check the accuracy of letter in string

let str = 'javascript';

function findDuplicate(str) {


    let freqMap = {}


    for (let i of str) {
        if (freqMap[i]) {
            freqMap[i]++
        } else {
            freqMap[i] = 1
        }
    }
    return freqMap
}

const r = findDuplicate(str)
console.log(r)