const express = require('express')

var app = express()

app.use(express.static(__dirname + '/NucesCircle'));

console.log(__dirname)

app.listen(3000);