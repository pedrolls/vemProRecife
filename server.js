const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Museu = require('./model/museuModel'), //created model loading here
  //Produto = require('./lojaApi/models/produtoModel')
  bodyParser = require('body-parser');
  const logger = require('morgan')
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vemProRecife',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}); 

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/MuseuRoutes'); //importing route
routes(app); //register the route

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);