// let obj = {

//     toString() {


//     }

// valueOf() {

// by default it returns the same object 


// }
// }


//===================

// default show the object and object 

let obj = {

    toString() {

        // return 'lets learning javascript'

        return "90";

    },
    valueOf() {

    }
}

// overriding the default method of an object


//=========================


console.log(obj.toString())




// result - object object 



//=================

let obj2 = {

    x: 10,
    valueOf() {
        return 10
    }
}


console.log(obj2.valueOf())


// ==============

let obj3 = {
    x: 10
}


console.log(typeof obj3.valueOf())

console.log(10 - obj3)
// default it show object as a type 



// obj4.valueOf =  object , toString -> [object  Object] -> NaN 


let obj4 = {

    x: 7,
    valueOf() {
        return 90
    }
}

console.log(100 - obj4)



// object - toPrimitive - hint - number - it will call valueOf method which is returning 90 , so which is already a number so it will be 10






let obj5 = {
    x: 7,
    toString() {
        return {

        }
    }
}


// console.log(100 - obj5)

// it will return error


let obj6 = {
    x: 8,

    toString() {
        return "88"
    }
}


console.log(100 - obj6)


// ========================= 


let newObj = {}


console.log("18" + newObj)

console.log(18 + newObj)



//=================ToBoolean==================

let x = 10;
console.log(!10)

//  - return false


console.log(NaN == NaN)
// false

console.log(NaN === NaN)

// false
console.log('NaN' == NaN)

// false

let t = {
    x: 10,
    valueOf() {
        return 100
    }
}

console.log(99 == t)

// false

console.log(100 == t)

// true



let z = {
    x: 10,
}

let m = {
    x: 10
}

let n = {
    x: 10
}


console.log(z == m)

// false

console.log(m == n)

// false

console.log(z == z)

// true


// toString - "" +  value

console.log("" + 0)
// 0

console.log("" + -0)

// 0

console.log("" + [])

// empty string return 

console.log("" + {})

// returns object and object  [object Object]

console.log("" + [1, 2])

// it will remove the brackets from the array so it will be [ 1 , 2 ]

console.log("" + [null, undefined])
// it will remove the brackets from array and also null and undefined

console.log("" + [1, 2, null, 4])

// it will remove the bracket from array and null and result should be 1,2,,4


//ToNumber

console.log(0 - "010")  // decimal number 

// -10

console.log(0 - "O10")

// NaN

console.log(0 - 010);

// converted into octal number 010


console.log(0 - '0xb') // hexadecimal number 


console.log([] - 1)

console.log([""] - 1)

console.log(["0"] - 1)