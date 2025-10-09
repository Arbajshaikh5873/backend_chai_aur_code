import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config({
  path: "./.env",
});

import connectDB from "./db/index.js";

const port = process.env.PORT || 8000;

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());


connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`DB connected and running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!! " + err);
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
