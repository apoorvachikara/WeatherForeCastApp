// const express = require('express');
// const app = express();
// const cores = require('os');
// console.log(cores.cpus().length);
// const { exec: runCommand } = require('child_process');
// var handlebars  = require('hbs');
// const path = require('path');
// var checkObjectEmpty = require('../util/checkObjectEmpty');
// const geocode = require('../../util/geocode');
// const forecast = require('../../util/forecast');

// const publicDirectory = path.join(__dirname, '../public');
// const viewsPath = path.join(__dirname, '../templates');
// const partialPath = path.join(__dirname, '../templates/partials');


// const client = require('mongodb').MongoClient;

// client.connect('mongodb://localhost:27017', (err, client) => {
//                 if (err) {
//                     console.log(err);
//                     return;
//                 }
//                 // var db = client.db('meanstackapp');   
//                 var db = client.db('meanstackapp');
//                 console.time('start');
//                 db.collection('users').findOne(
//                    {
//                        email: 'carrstone@digirang.com'

//                    }
//                 ).then( update =>{ 
//                     console.log(update);
//                     console.timeEnd('start')})
//                 .catch(error => console.log(error));

                // var cursor = db.collection('test2').find({})
                // cursor.hasNext().then(status =>  status ? cursor.count().then(count => console.log(count)) : console.log(`Does not exist`));
            //   cursor.toArray((err, data) => {
            //             if (err) {
            //                     return console.log(err);
            //             }
            //             console.log(data);
            //   })
            //    console.log(cursor)

          
                // db.collection('products').createIndexes( [
                //     { "item" : 1, "type" : 1 },
                //     { "item" : 1, "type" : -1 },
                //     { "price" : 1 }
                //  ])
            




                // db.collection('testUser').insert([
                //     { _id: 1, item: { category: "cake", type: "chiffon" }, amount: 10 },
                //     { _id: 2, item: { category: "cookies", type: "chocolate chip" }, amount: 50 },
                //     { _id: 3, item: { category: "cookies", type: "chocolate chip" }, amount: 15 },
                //     { _id: 4, item: { category: "cake", type: "lemon" }, amount: 30 },
                //     { _id: 5, item: { category: "cake", type: "carrot" }, amount: 20 },
                //     { _id: 6, item: { category: "brownies", type: "blondie" }, amount: 10 },
                // ], (err, status) => {
                //     if (err)
                //        return console.log(err);
                //     console.log(status);
                // })        
                
                // var cursor = db.collection('testUser').find({});
                // cursor.forEach(el => console.log(el));
                // cursor.then(doc =>  doc.forEach(el => console.log(el)));
                // var cursor = db.collection('users').find({}).limit(3).skip(549); 

                    // cursor.count().then(data => console.log(data))

                    // cursor.next((err, doc) => {
                    //     console.log(doc);
                    // })
                    // cursor.next((err, doc) => {
                    //     console.log(doc);
                    // })
                    // cursor.next((err, doc) => {
                    //     console.log(doc);
                    // })
                    // cursor.next((err, doc) => {
                    //     console.log(doc);
                    // })
        
// }) 


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

// app.use(express.static(publicDirectory));
// app.set('views', viewsPath);
// app.set('view engine', 'hbs');
// handlebars.registerPartials(partialPath);


// app.get('/', (req, res) => {
//     console.log(a);
//     res.render('index', {
//         'title': 'Weather App',
//         'name': 'Apoorva Chikara 1'
//     });
// })
// app.get('/help', (req, res) => {
//     res.render('help', {
//         title: 'Help',
//         name: 'Apoorva Chikara 2',
//         message: 'I am on Help Page'
//     });
// });


// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About',
//         name: 'Apoorva Chikara'
//     });
// });

// app.get('/weather', (req, res) => {

// debugger;
//     if(!req.query.address) {
//         return res.send({
//             error: 'You must provide search term'
//         });
//     }
//     else{

//         geocode(req.query.address, (error, {latitude, longitude, place} = {}) => {
//                     if(error) {
//                         res.send({
//                             message: error
//                         })
//                         return;
//                      }
//                      forecast(latitude, longitude, (error, foreCastData, currentWeather) => {
//                         if (error) {
//                             res.send({
//                                 message: error
//                             })
//                         }
//                         res.send({
//                             foreCastData: foreCastData,
//                             currentWeather: currentWeather
//                         })
//                     })
//         })
//     }
    

// });

// app.get('/products', (req, res) => {
//     if(checkObjectEmpty(req.query)) {
//         return res.send({
//             error: 'You must provide search term'
//         })
//     }
//     res.send({
//         products: params
//     })
// })

// app.get('/help/*', (req, res) => {
//     res.render('./layouts/error' ,{
//         PageName: 'Help Article not Found',
//         name: 'Apoorva Chikara'
//     });
// })

// app.get('*', (req, res) => {
//         res.render( './layouts/error' , {
//             PageName: 'Page not Found',
//             name: 'Apoorva Chikara'
//         });
// })



// app.listen(3000, () => {
    
//     console.log("Listening on Port 3000");
// })  


var cluster = require('cluster');

var count = 1;

if(cluster.isMaster) {
    var numWorkers = require('os').cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for(var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {
    var app = require('express')();
    
    app.all('/*', function (req, req, next){console.log(count); count++; next()},  function(req, res) {res.send('process ' + process.pid + ' says hello!').end();})

    var server = app.listen(8000, function() {
        console.log('Process ' + process.pid + ' is listening to all incoming requests');
    });
}
