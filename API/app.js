const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const axois = require('axios').default;

const userRoute = require('./routes/user');
const fiddleRoute = require('./routes/fiddle');

const app = express();

app.use(cors());
app.use(express.json());



app.get('/', (req,res)=>{
    res.end('hello from server');
});


app.use('/users', userRoute);
app.use('/fiddles', fiddleRoute);

app.post('/execute',(req,res)=>{
    let reqObj = req.body;
    reqObj['clientId'] = "";
    reqObj['clientSecret'] = "";
    axois.post('https://api.jdoodle.com/v1/execute', reqObj).then((resp)=>{
        res.json({error:false, response: resp.data});
    }).catch((err)=>{
        console.log(err);
    });
})

mongoose.connect('',{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log('connect to db');
}).catch((err)=>{
    console.log(err);
});

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})