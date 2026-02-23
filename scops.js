// Function Scope

var name = "Ashwini";
function greet(){
    var name= "Patil";
    console.log(name);
}
greet();
console.log(name);

// 2
let city= "Mumbai";
function showcity(){
    let city = "Pune";
    console.log(city);
}
showcity();
console.log(city);

// Block Scope Practice

let age=22;
if(true){
    let age=30;
    console.log(age);
}
console.log(age);

// 2
let score = 50;
for(i=0; i < 1; i++){
    let score = 100;
    console.log(score);
}
console.log(score);
