const express = require('express');
const path = require('path');

const indexRouter = require('./src/routes/index');

const moviesRoutes = require('./src/routes/moviesRoutes');
const genresRoutes = require('./src/routes/genresRoutes');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, './public')));

app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
