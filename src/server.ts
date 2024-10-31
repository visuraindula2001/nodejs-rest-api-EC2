import express from "express";

import dotenv from "dotenv";
import connectDb from "./Config/dbConfig";
dotenv.config();
connectDb();

const port = process.env.PORT || 5000;
const app = express();


app.get('/', (req, res) => {
    res.send("Hello world");
});



app.listen(port,()=>{
    console.log(`Port is running on ${port}`);
})

