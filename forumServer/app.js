const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const loginRegisterRoute = require('./api/controllers/routes/LoginRegisterRoute')
const repoTest = require('./api/repositories/LoginRegisterRepository')
const port = 3080;
const url = 'mongodb://127.0.0.1:27017/Forum'

mongoose.connect(url,{ useNewUrlParser : true , useUnifiedTopology : true })
.then( () => {
    res.send("Hi!!!!")
    console.log("Hey! Connection Successfull...")})        
.catch((err) => 
    console.log(err));

app.use('/loginregister',loginRegisterRoute)
app.listen( port, function() {
    console.log("server is ready at port " + port);
});



