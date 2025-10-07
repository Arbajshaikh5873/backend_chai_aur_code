import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import mongoose from "mongoose";
import connectDB from "./db/index.js";

const port = process.env.PORT || 8000;

const app = express();

app.listen(port, async () => {
  await connectDB();
  console.log(`DB connected and running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello jiii");
});

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.error("error:", err);

//       app.listen(3000, () => {
//         console.log("Server is running on port 3000");
//       });
//     });
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// })();
