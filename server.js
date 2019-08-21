
const express =require('express');
const app=express();
const port =process.env.PORT || 9090

app.get('/',(req,res)=>{
res.send('hello world')
});
app.listen(port,(req,res)=>{
    console.log('server runging on port no '+port)
    })