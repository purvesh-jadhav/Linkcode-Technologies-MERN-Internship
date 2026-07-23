const fs=require("fs")

function fileOperation(){
    console.log("File operation started");

    fs.writeFile("file1.txt","heyyy i am Purvesh Jadhav",()=>{
        console.log("data written to file");   
    })

    console.log("File opeartion ended ");
    

    
}

module.exports=fileOperation