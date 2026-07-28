const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("This is response from the express");
});

mongoose
  .connect(
    "mongodb://purvesh123:purvesh@123@ac-v1hjz2t-shard-00-00.liahmn9.mongodb.net:27017,ac-v1hjz2t-shard-00-01.liahmn9.mongodb.net:27017,ac-v1hjz2t-shard-00-02.liahmn9.mongodb.net:27017/?ssl=true&replicaSet=atlas-13vwyy-shard-0&authSource=admin&appName=Cluster0"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("database connection  error", err);
  });

app.listen(3000, () => {
  console.log("express is running on the port 3000");
});