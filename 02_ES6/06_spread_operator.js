// spread opertor break the array's element as common element
// it generally used to combine differnt array and objects

let arr1 = [1,2,3,4];
let arr2 = [4,5,6,7];
let arr = [...arr1,...arr2];
// console.log(arr);

let arr3  = [1,2,4,5,6,7,8];
let[a,b,...c] = arr3//destructuring wiht spread operator;
// console.log(a," ",b," ",c);

let obj ={
    "description":"it require a little bit of research",
    "condition":"Instead of saying I don't know"
}
let obj1 ={
    "desc":"So sweet of you",
    "cond":"replacement of Thank You"
}
let newObj = {...obj,...arr1,...obj1};
console.log(newObj);
