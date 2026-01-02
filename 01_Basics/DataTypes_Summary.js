// # PRIMITIVE

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.2
const isLoggedIn = false
const outSideTemperature = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 5554564684446n








// Reference Type (Non Primitive)


// Arrays, Objects, Functions

const heroes = ["Shaktiman", "NaagRaj", "Doga"]

// let myObj{
//     name : Shyam,
//     age : 23,
// }


 const myFunction = function(){
    console.log("Hello World");
 }


 console.log(typeof bigNumber);
 console.log(typeof outSideTemperature);
 console.log(typeof heroes);





 //   +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack (Primitive), Heap (non-Primitive)

 let myYoutubeName = "Abhi2003"

 let anotherName = myYoutubeName
 anotherName = "Shyam Prasad"

 console.log(anotherName);
 console.log(myYoutubeName);

 let user = {
   email : "user@google.com",
   UPI : "user@ybl"
 }

 let user2 = user

  user2.email = "abhi2003@google.com"

  console.log(user.email);
  console.log(user2.email);
  
 