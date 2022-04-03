const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb+srv://root:root@cluster0.tekai.mongodb.net/Movie');

mongoose.connection.on('connected', function () {
  console.log('Connected to Database '+'Movie');
});

mongoose.connection.on('error', (err) => {
  console.log('Database error ' + err);
});

let port = 5000;

  app.use(bodyParser.json());
  const routes = require('./routes/routes.js');
  app.use('/api', routes);

  app.get('/new', (req, res) => {
    res.render('new.ejs');
  });
  
  app.get('/list', (req, res) => {
    res.render('list.ejs');
  });

//PORTA
app.listen(process.env.port || port, () =>{
  console.log('PORTA ABERTA: '+ port);
});

