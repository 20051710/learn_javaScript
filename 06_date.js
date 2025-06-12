// Date


let myDate = new Date()

// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString)



// console.log(typeof myDate)


// // let newDate = new Date(2023 , 0 , 15)
// // let newDate = new Date(2023 , 0 , 15,5,3)
// // let newDate = new Date("2020-01-14")
// let newDate = new Date("01-14-2023")


// console.log(newDate.toLocaleString())


// let myTimeStep = Date.now()
// console.log(myTimeStep)


// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()

// console.log(newDate.getDay())
// console.log(newDate.getMonth()+1)


console.log(newDate.toLocaleString('en-IN',{
   hour:"2-digit"
}))
