import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/youtube`
    );

    console.log(
      `\n mongoDB Connected !! DB Host at : `,
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("mongoDB Connection Error : " + error);
    process.exit(1);
  }
}

export default connectDB;
