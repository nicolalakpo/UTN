var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/////////// I
require('dotenv').config();

var pool = require('./models/bd');
/////////// F
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { config } = require('dotenv');

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



/////////I

//select
pool.query('select * from empleados').then(function(resultaods){
  console.log(resultaods);
});
//insert
var obj={
  nombre: 'Diego',
  apellido: 'Lehmann',
  trabajo: 'Modelador 3D',
  edad: 26,
  salario: 1200,
  mail: 'DLehmann@hotmail.com'

}
pool.query('insert into empleados set?', [obj]).then(function
  (resultaodos){
    console.log(resultaodos);
  });

//update
var id = 12;
var obj = {
  nombre: 'Juan',
  apellido: 'Alegre',
  mail: 'JuancaAlegre@Lanzone.com.SI'
}

pool.query('update empleados set ? where id_emp=?', [obj, id]).then(function(resultados){
console.log(resultados)
});

/////////F

/////////Adicional

var id = 1;
var obj = {
  nombre: 'Emiliano',
  apellido: 'Russo',
  trabajo: 'Movistar',
  edad: 28,
  salario: 120000,
  mail: 'EmilyRusso@yahoo.com'

  
}
pool.query('update empleados set ? where id_emp=?', [obj, id]).then(function(resultados){
  console.log(resultados)
  });



// var id = 3;
// pool.query('delete from empleados set ? where id_emp =?', [id]).then(function(resultado){
//   console.log(resultado)
// });  

//////////FIn Adicional


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
