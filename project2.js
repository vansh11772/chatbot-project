alert("hello world");

console.log("code is running 0...")
console.log("code is running 1...")
console.log("code is running 2...")

// var a=prompt("Enter your number")

var isTrue=confirm("you want to leave")
if(isTrue){
    console.log("yes leave")
}
else{
    console.log("not leave")
}

// console.log("your number is " + a)

document.title ="my webpage"

document.body.style.backgroundColor="red"

 // var a=4; // globally scoped
// var b=9;
// var c="hello";
// let d=2; //block scoped
// d=d+1
// console.log(a+b+8)
// console.log(typeof a,typeof b,typeof c)
 /* {
   let d=11;
 // var a=22;
    console.log(d)
}
console.log(d) */

let a=2;
let b=1.44;
let c="hello";
let d=true;
let e=undefined;
let f=null;

console.log(a,b,c,d,e,f)
console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f)

let o={
    "name":"Rohan",
    "id number":2314
}
console.log(o)
o.salary="1crores";
console.log(o)
o.salary="2crores";
console.log(o)
o.is_good="true";
console.log(o)
