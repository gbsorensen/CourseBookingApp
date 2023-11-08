require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  if (req.body) {
    console.log("Request body:");
    console.log(req.body);
  }
  next();
});

// Routes
app.use("/api/courses", require("./src/routes/courseRoute"));
app.use("/api/users", require("./src/routes/userRoute"));

mongoose
  .connect(
    "mongodb://sorensengb:testing1@ac-wtrut14-shard-00-00.gsabzwg.mongodb.net:27017,ac-wtrut14-shard-00-01.gsabzwg.mongodb.net:27017,ac-wtrut14-shard-00-02.gsabzwg.mongodb.net:27017/?ssl=true&replicaSet=atlas-oa9qwg-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port 3000 and Connected to MongoDB`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
