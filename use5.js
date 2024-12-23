// let arr=[1,3,4,5,2];

/* arr[2]=6

console.log(arr,typeof arr)

console.log(arr.length)
console.log(arr[2]) */

// console.log(arr.toString())
// console.log(arr.join("and"))

/* let a=[1,2,3,4,5,6]

console.log(a.shift())                   // console.log(a.pop()) 
console.log(a)
console.log(a.unshift("two"))            // console.log(a.push("seven"))
console.log(a)
delete a[5]
console.log(a)
console.log(a.length) */

/* let p=[1,2,3]
let q=[4,5,6]

console.log(p.concat(q))

let r=[3,2,1,4]
// console.log(r.sort())
console.log(r.splice(1,2,7,8))
console.log(r) */

let arr=[1,2,3,4,5]

/* arr.forEach((value,index,arr) => {
    console.log(value,index,arr)
    
}); */ 
let newarr=arr.map((e,index,arr)=>{
    return e**2
})
console.log(newarr)

const greaterthanseven=(e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(newarr.filter(greaterthanseven))

let arr2=[1,2,3,4,5]
const red=(a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))

console.log(Array.from("string"))