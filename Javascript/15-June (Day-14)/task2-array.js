//wap to find even numbers in array using forEach()
let arr=[1,2,3,4,5]
arr.forEach((val)=>{
    if(val%2==0){
        console.log(val);
    }
})

//wap to calculate sum of numbers in arraty
let sum=0
arr.forEach((val)=>{
    sum=sum+val
})
console.log("Sum od array is:",sum);
