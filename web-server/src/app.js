const express = require('express');
const app = express();
const path = require('path');
const publicDirectory = path.join(__dirname, '../public');
const log = console.log;


log(__dirname)
log(path.join(__dirname, '../public'));

app.use(express.static(publicDirectory));6

app.get('/', (req, res) => {
        res.send('<title>Title</title>');
});

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

