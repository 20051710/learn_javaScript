const heros = ["ironman.shaktman,antman"]
const array = [0,1,2,3,4,5,]

const array2 = new Array(1,23,5,5)
console.log(heros)

// console.log(heros.length)



// methoda

 heros.push("spiderman")
// console.log(heros)
// console.log(heros.length)

heros.pop()

// console.log(heros)
// console.log(heros.length)


// heros.unshift(0)
// console.log(heros)
// heros.shift(0)
// console.log(heros)



// console.log(heros.includes("antman"))
// console.log(heros.indexOf("ironman"))

let  newstr = heros.slice(0,1)

console.log(newstr)

let otg = heros.splice(0,1)

console.log(heros)//splice mainupatede the array
console.log(otg)

