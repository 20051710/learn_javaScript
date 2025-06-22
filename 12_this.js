// const user = {
//    username : "AKshar",
//    price : 5000,

//    msg : function(){
//         console.log(`${this.username} , welcome`);
//         console.log(this)
//    }
 
// }
 
// user.msg()
// user.username = "parth"  // this is context change
// user.msg()


// function chai(){
//    let username = "akshar"
//    console.log(this.username)
// }

// chai()  this not use


//  Arrow function 

// const chai = () => {
//    let usrename = "akshar"
//       console.log(this.usrename)
// }

// chai()


// implisite retrun


// const code = (num1 , num2) => (num1 +num2)
const code = (num1 , num2) => ({username:"akshar"})//object return   

console.log(code(3,2))