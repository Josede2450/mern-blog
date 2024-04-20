import express from "express";
import { mongoose } from "mongoose"; //Import data base
//nodemon works like a liveserver, we don't need to stop and start the program again, for see the results
import dotenv from "dotenv"; //We Install and use dotenv for use enviroment variable
import userRoutes from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser"; // For see the cookies
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";

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

app.use(express.json());
app.use(cookieParser()); // For extract cookie from the browser

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRoutes); //That work for test our API
app.use("/api/auth", authRoute); //That work for signup our API
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use((err, req, res, next) => {
  //Middleware
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    sucess: false,
    statusCode,
    message,
  });
});
