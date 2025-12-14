console.log(Number('01254'))

console.log(Number('abcd'))

// NaN

let x = NaN

console.log(x == NaN)

// false


console.log(isNaN(x))

// true

console.log(isNaN('sanket')) // isNaN converts the incoming input to a number 


console.log(Number.isNaN('sanket'))

// false
// because it does'nt do coreection of NaN value
let n = -0

console.log(n == 0)

console.log(Object.is(n, 0))

// false

console.log(Object.is(n, -0))

// true 

// using math.sign we can check the sign of ny number

console.log(Math.sign(-3))

// -1

console.log(Math.sign(2))


// console.log(1.toString())

//boxing in javascript

console.log(Number(2).toString())