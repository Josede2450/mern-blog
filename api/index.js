import express from "express";

//nodemon works like a liveserver, we don't need to stop and start the program again, for see the results

const app = express(); //Creating the app

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
