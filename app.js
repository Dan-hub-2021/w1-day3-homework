var express = require('express');
var path = require('path');
//var routes = require ('./routes/index');
var app = express();

app,get('/components', function(req, res){

});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(3000);
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/', routes);


//module.exports = app;