import mongoose from "mongoose";
import {DB_NAME} from "./constants.js"
import express from "express";
import connectDB from "./db/index.js"

// require("dotenv").config({path:"./env"})

import dotenv from "dotenv"

dotenv.config({
    path: "./env"
})






connectDB();





// const app = express();

// ;( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error) => {
//             console.log(`Database is not able to talk with :${error} `)
//             throw error
//         });

//         app.listen(process.env.PORT, ()=> {
//             console.log(`App is listening on port : ${process.env.PORT}`)
//         });

//     } catch (error) {
//         console.log(`Database connection error ${error}`);
//         throw error
//     }
// })()