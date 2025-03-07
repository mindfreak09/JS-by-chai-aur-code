// primitive
// 7 types ----> string, numbers, boolean , empty , undefined , symbol , bigINT

const score=100;
const scoreValue =100.3
const isLoggedIn= false
const outsideTemp =null
let userEmail;

const id = Symbol('123')

const anotherId =Symbol('123')
console.log(id==anotherId);

const bigNumber= 5646467436469454n



// reference types 
// non primitive
// array , objects, fuction 

const heros =[ "nagraj"," karna", "arjun"]
let myobj={
    name:"pranoy",
    age:22,


}
const myFuction = function(){
console.log("hello world")
}
console.log(typeof outsideTemp)
