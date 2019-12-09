const express = require('express');
const app = express();
var handlebars  = require('hbs');
const path = require('path');

const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');
const partialPath = path.join(__dirname, '../templates/partials');

app.use(express.static(publicDirectory));
app.set('views', viewsPath);
app.set('view engine', 'hbs');
handlebars.registerPartials(partialPath);

app.get('/', (req, res) => {
    res.render('index', {
        'title': 'Weather App',
        'name': 'Apoorva Chikara'
    });
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Apoorva Chikara',
        message: 'I am on Help Page'
    });
});


app.get('/about', (req, res) => {
    res.render('about', {
        'title': 'About',
        'name': 'Apoorva Chikara'
    });
});


app.get('/weather', (req, res) => {
    res.send('Weather page');
});

app.listen(3000, () => {
    
    console.log("Listening on Port 3000");
})  

