'use strict'

const express = require('express')
const proxy = require('express-http-proxy');

const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing json data
app.use(bodyParser.urlencoded({ extended: true })); // for parsing form data


app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

  next();
});
const routes = require('./api/routes/index.js')
routes(app);

app.listen(5000, function () {
  console.log('app listening on port 5000!')
})