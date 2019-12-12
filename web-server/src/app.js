const express = require('express');
const app = express();
const { exec: runCommand } = require('child_process');
var handlebars  = require('hbs');
const path = require('path');
var checkObjectEmpty = require('../util/checkObjectEmpty');
const geocode = require('../../util/geocode');
const forecast = require('../../util/forecast');

const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');
const partialPath = path.join(__dirname, '../templates/partials');

// runCommand('node ../../app.js newyork', (err, stdout, stderr) => {
//     if (err) {
//       //some err occurred
//       console.error(err)
//     } else {
//      // the *entire* stdout and stderr (buffered)
//      console.log(`stdout: ${stdout}`);
//      console.log(`stderr: ${stderr}`);
//     }
//   });

app.use(express.static(publicDirectory));
app.set('views', viewsPath);
app.set('view engine', 'hbs');
handlebars.registerPartials(partialPath);

app.get('/', (req, res) => {
    res.render('index', {
        'title': 'Weather App',
        'name': 'Apoorva Chikara 1'
    });
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Apoorva Chikara 2',
        message: 'I am on Help Page'
    });
});


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Apoorva Chikara'
    });
});

app.get('/weather', (req, res) => {


    if(checkObjectEmpty(req.query)) {
        return res.send({
            error: 'You must provide search term'
        });
    }
    
    geocode(req.query.address, (error, {latitude, longitude, place}) => {
                if(error) {
                    res.send({
                        message: error
                    })
                 }
                 forecast(latitude, longitude, (error, foreCastData) => {
                    if (error) {
                        res.send({
                            message: error
                        })
                    }
                    res.send({
                        foreCastData: foreCastData
                    })
                })
    })

});

app.get('/products', (req, res) => {
    if(checkObjectEmpty(req.query)) {
        return res.send({
            error: 'You must provide search term'
        })
    }
    res.send({
        products: params
    })
})

app.get('/help/*', (req, res) => {
    res.render('./layouts/error' ,{
        PageName: 'Help Article not Found',
        name: 'Apoorva Chikara'
    });
})

app.get('*', (req, res) => {
        res.render( './layouts/error' , {
            PageName: 'Page not Found',
            name: 'Apoorva Chikara'
        });
})



app.listen(3000, () => {
    
    console.log("Listening on Port 3000");
})  

