const express = require('express');
const app = express();
var handlebars  = require('express-handlebars');
const path = require('path');
const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/help', (req, res) => {
    // res.send('help.html');
});


app.get('/about', (req, res) => {
    // res.send('about');
});


app.get('/weather', (req, res) => {
    res.send('Weather page');
});

app.listen(3000, () => {
    
    console.log("Listening on Port 3000");
})  

