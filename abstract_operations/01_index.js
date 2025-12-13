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

let x = 10 ;
console.log(!10)

//  - return false
