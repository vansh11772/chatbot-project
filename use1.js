// console.log("hello i am conditional tutorial")

/* let a=4;
// let b=1;

// console.log(a**b);
// console.log(a+=b);

if(a==4){
    console.log("positive number");
}
else{
    console.log("negative number");
} */

let p=20;
let q=12;

if(p>q){
    console.log("p is greater than q");
}
else if(p<q){
    console.log("p is less than q");
}
else{
    console.log("both are equal");
}

let r= p>q ?(p-q) : (q-p) //we use this instead of if-else
console.log(r);