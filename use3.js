/* function first(name) {
    console.log("hey " + name + " what's up")
    console.log("hey " + name + " how are you")
    console.log("hey " + name + " are you ok")
    console.log("hey " + name + " looking nice")
}

first("rohan")

first("lucky") */

function div(p,q,r=1) {
    console.log(p,q,r)
    return p/q+r
}

result1=div(8,2)
result2=div(9,3)
result3=div(20,5,2)

console.log("the division of p and q is",result1)
console.log("the division of p and q is",result2)
console.log("the division of p and q is",result3)

const func1=(a)=>{
    console.log("arrow function",a)
}

func1(110)
func1(111)