const express = require('express')

const port = process.env.PORT || 3000;

var app = express()

app.use(express.static(__dirname + '/NucesCircle'));

app.listen(port);