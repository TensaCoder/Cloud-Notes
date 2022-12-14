const mongoose = require("mongoose");
require("dotenv").config();

CONNECTION_URL = `mongodb+srv://${process.env.UserName}:${process.env.DB_Password}@tensacoder.85rj5.mongodb.net/Notes?retryWrites=true&w=majority`
// console.log("COnnection url value : ",CONNECTION_URL);
const connectToMongo = () =>{
    mongoose.connect(CONNECTION_URL, () =>{
        console.log("Connected to Cloud Database Successfully!!!");
    })
};

module.exports = connectToMongo;