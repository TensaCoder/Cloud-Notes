// import mongoose from "mongoose";
const mongoose = require("mongoose");
require("dotenv").config();

CONNECTION_URL = `mongodb+srv://TensaCoder:${process.env.DB_Password}8@tensacoder.85rj5.mongodb.net/CloudNote?retryWrites=true&w=majority`
// console.log("COnnection url value : ",CONNECTION_URL);
const connectToMongo = () =>{
    mongoose.connect(CONNECTION_URL, () =>{
        console.log("Connected to Cloud Database Successfully!!!");
    })
};

module.exports = connectToMongo;