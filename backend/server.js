const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getSecret = require("./secret")
const listRouter = require('./router');


require('dotenv').config();

const API_PORT = 3001;
const app = express();
const port = 3001;


app.use(cors());
app.use(express.json());

const uri = getSecret("dbUri");

mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true})
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('MongoDB database connection established successfully')
})



app.use('/list', listRouter);


app.listen(port, () => {
    console.log(`server is running on posrt ${port}`)
} )