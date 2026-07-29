const mongoose = require("mongoose")

const databaseConnection=()=>{
    mongoose.connect("mongodb://heyyyyyyyyyyyyasassa_db_user:yhDOD9MGxxIhJZz4@ac-mxmspcb-shard-00-00.xerlysj.mongodb.net:27017,ac-mxmspcb-shard-00-01.xerlysj.mongodb.net:27017,ac-mxmspcb-shard-00-02.xerlysj.mongodb.net:27017/?ssl=true&replicaSet=atlas-e4okhf-shard-0&authSource=admin&appName=Cluster0")
    .then (()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log(err);
    })
}




module.exports=databaseConnection