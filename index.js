var express = require('express'),
app = express(),
logger = require('morgan'),
bodyParser = require('body-parser'),
multer = require('multer');

app.use(logger);
app.use(bodyParser.urlencoded({extended: false}));
// qpp.use(bodyParser.json);
app.use(express.static(__dirname + './public'));
app.listen('3000');

require('./server/routes.js')(app);