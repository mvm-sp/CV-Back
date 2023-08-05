let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
//let bodyParser = require('body-parser');
let cors = require('cors');

let cvcontact  = require('../routes/cvcontact');
let cvhistory  = require('../routes/cvhistory');
let cvlanguage  = require('../routes/cvlanguage');
let cvobjective  = require('../routes/cvobjective');
let cvowner  = require('../routes/cvowner');
let cvskill  = require('../routes/cvskill');
let cvskilltype  = require('../routes/cvskilltype');

let app = express();

//Use the env Configuration File.
require('dotenv').config();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(cors());

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use('/',cvcontact);
app.use('/',cvhistory);
app.use('/',cvlanguage);
app.use('/',cvobjective);
app.use('/',cvowner);
app.use('/',cvskill);
app.use('/',cvskilltype);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
