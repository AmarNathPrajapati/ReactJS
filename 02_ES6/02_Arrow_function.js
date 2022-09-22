/**
 * with arrow fucntion "this" provide data of window
 * with normal fucntion "this" provide data of that particular obbject
 */
let get = () => "I am learning ReactJs to become a frontend developer";
// console.log(get());

// my concern with "This"

let obj = {
    "age":20,
    "language":"JavaScript",
    show:function(){
        console.log(this.language," is my favourite language");
    },
    show1:()=>{
        console.log(this.language," is my favourite language");
    }
}
obj.show();
obj.show1();