import express from "express";
import { mongoose } from "mongoose"; //Import data base
//nodemon works like a liveserver, we don't need to stop and start the program again, for see the results
import dotenv from "dotenv"; //We Install and use dotenv for use enviroment variable

dotenv.config(); //For use env in our program
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected"); // Connecting to the database
  })
  .catch((err) => {
    console.log(err);
  }); //If something goes wrong, printb the error

const app = express(); //Creating the app

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
