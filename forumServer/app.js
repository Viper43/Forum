const express = require("express");
const app = express();

const port = 3080;

const loginRegisterRoute = require('./api/controllers/routes/LoginRegister')
app.use(loginRegisterRoute)

function displayHello() {
    console.log("hello");
    console.log("how are you");
}

app.listen( port, function() {
    console.log("server is ready at port " + port);
});


displayHello();
