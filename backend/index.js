// const express = require('express')
import express from 'express'
const app = express()
import dotenv from "dotenv";
import mongoose from 'mongoose';
import bookRoute from './routes/book.route.js';
import userRoute from './routes/user.route.js'
import cors from 'cors'
dotenv.config();
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 4000;
const MongoDBURI = process.env.MongoDBURI

try {
    await mongoose.connect(MongoDBURI);
    console.log("database connected successfully ")
  } catch (error) {
    console.log(error);
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/book",bookRoute)
app.use("/auth",userRoute)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
