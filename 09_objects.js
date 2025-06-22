// singleton
// constructer

// Object.create

//  object literals


const mysy = Symbol("key1")

const js_user = {
    name : "akshar",
    age:18,
    location:"surat",
    [mysy]:'mykey1',
    "full Name":"akshar mandaviya"
}

// console.log(js_user.age)
// console.log(js_user["age"])

// console.log(js_user.full Name)  not work   not access use dot
// console.log(js_user["full Name"])

// console.log(typeof js_user[mysy])


// Object.freeze(js_user)   not allow to chnages




js_user.greeting = function(){
    console.log("hello")
}

// console.log(js_user.greeting)


const {age : n} = js_user  // other syntext to get values


console.log(n)


