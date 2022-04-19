
const express = require('express');
const app = express();
const path = require('path');
const studentDb = require('./data/student-db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
 
app.get('/', function (req, res) {
res.send('<h1>Hello World!</h1>');
});

app.get('/', function (req, res) {
    res.redirect('/home');
});
app.get('/home', function(req, res) {
    res.render('home');
});
app.get('/students', function(req, res) {
    res.render('students/index', {
      students: studentDb.getAll()
    });
  });

app.listen(3000, function () {
console.log('Listening on port 3000');
});