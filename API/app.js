const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/user');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
    res.end('hello from server');
});

app.use('/users', userRoute);

mongoose.connect('',{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log('connect to db');
}).catch((err)=>{
    console.log(err);
});

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})