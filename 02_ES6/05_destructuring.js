let arr = ["Broom","wiper","mop","wet","damp","soaked"];
// destructuring of array;
let[a,b,c] = arr;
console.log(a ," ", b," ", c);
let[,,,d,e,f] = arr;
console.log(d ," ", e," ", f);

// destructuring in function
const calculate = (a,b) =>{
    return [a+b,a-b,a*b,a/b]
}
let[add , sub, mul , div] = calculate(5,2);
console.log(add," ", sub, " ", mul , " ", div);