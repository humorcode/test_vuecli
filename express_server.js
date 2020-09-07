var express = require('express');
var app = express();
app.use('/myvuerouter',express.static('dist'));
app.listen(8080, function () {console.log("- Local: [ http://localhost:8080/myvuerouter ]")});