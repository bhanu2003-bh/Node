require('dotenv').config()
const express = require('express');

const app = express();

const port = 7000;


app.get('/' || '/home',(req,res)=>{
    res.send('Home Page');
})

app.get('/twitter',(req,res)=>{
    res.redirect('https://twitter.com/home');
})

app.get('/profile',(req,res) =>{
    res.send('<h1>Bhanu Pratap Sharma</h1>')
})

app.listen(process.env.PORT,()=>{
    console.log({port});
})