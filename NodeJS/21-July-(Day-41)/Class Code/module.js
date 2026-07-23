const { log } = require("node:console");

function add(a,b){
    console.log("Addition: ", a+b);
}

function sub(a,b){
    console.log("Substraction: ", a-b);
}

function mul(a,b){
    console.log("Multiplication: ", a*b);
}

function printEvenArray(){
    let arr=[11,20,34,55,46,21,50]
    console.log("Even numbers:");
    
    for(let i=0;i<arr.length;i++){
      if(arr[i]%2==0){
        console.log(arr[i]);
      }
    }
}

module.exports={add,sub,mul,printEvenArray}