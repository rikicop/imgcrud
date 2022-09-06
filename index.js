const express = require('express')
const app = express()
const userRouter = require("./routers/user")
const cors = require('cors')

require('dotenv').config();

const connectDB = require('./config/db')
const port = process.env.PORT || 8080;
connectDB()

process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
});

//I think this was used to reciving incoming forms
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/user", userRouter);

app.listen(port, function () {
    console.log(`App running! on port ${port}`);
});