const express = require('express');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const app = express();
app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.get('/',(req,res)=>{
    res.send("Crud Final");
})
app.listen(3005, ()=>{console.log('Server is running on http://localhost:3005')});


