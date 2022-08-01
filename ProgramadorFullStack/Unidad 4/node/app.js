var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



// -------------------------------


var primerRouter = require('./routes/primeraRuta')
var segundoRouter = require('./routes/segundaRuta')
var terceroRouter = require('./routes/terceraRuta')
var cuartoRouter = require('./routes/cuartaRuta')


// -------------------------------

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); 
app.use('/users', usersRouter);


//----------------------------------------
app.use('/primeraRuta',primerRouter)
app.use('/segundaRuta',segundoRouter)
app.use('/terceraRuta',terceroRouter)
app.use('/cuartaRuta',cuartoRouter)
//----------------------------------------


// -------------------------------
app.get('/primera', function(req, res){
    res.send('Primera ruta')
})
app.get('/segunda', function(req, res){
  res.send('Segunda ruta')
})
app.get('/tercera', function(req, res){
  res.send('Tercera ruta')
})
app.get('/cuarta', function(req, res){
  res.send('Cuarta ruta')
})
// -------------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
