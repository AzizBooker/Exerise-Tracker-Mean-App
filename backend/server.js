const express=require('express');
const cors=require('cors');
const moongose=require('mongoose');

require('dotenv').config();

const app=express()
const port=process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const uri=process.env.ATLAS_URI;
moongose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection=moongose.connection;
connection.once('open',()=>{
    console.log('MongoDB datebase connection established successfully')
})

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})