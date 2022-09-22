/**
 * var = reassign and redeclare(function scope)
 * let = reassign and can't redeclare(block level scope)
 * const = neither reassign nor redeclare
 */
for(var i =0 ; i<10 ; i++){
    // console.log(i);
}
// console.log(i);// we can access outside of the block.
// console.log(i);
for(let j =0 ; j<10 ; j++){
    // console.log(j);
}
// console.log(j);// we can't access let variable outside the block

const val = 12;
// val = 13;// we cant reassing value to the const variable.

const arr = [1,3,"abck",true,2.2];
arr[1]=11;// we can change the element of the array.
arr.forEach(element => {
    // console.log(element);
});

const object = {
    "name":"Chandan",
    "programmer":true,
    "Age":20
}
for (let key in object){
    console.log(object[key]);
}
