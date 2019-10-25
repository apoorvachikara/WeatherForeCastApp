const request = require('request');
const chalk = require('chalk');
const log = console.log;

const URL = 'https://api.darksky.net/forecast/e0a4e848ab645c1b816c6d538ff7ef20/37.8267,-122.4233';

const mapBoxAPi = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=1&access_token=pk.eyJ1IjoiYXBvb3J2YWNoaWthcmExOCIsImEiOiJjazI0anU0c28weDljM2JtejdmYmo0anliIn0.eis3kuSZ8kd7MCOeZvPBUw';

request({url: URL, json: true}, (error, response) => {
    
    if (error) {
        console.log('Unable to connect to weather API');   
        return;
    }
    else if (response.body.error) {
        log('Unable to find the Location');
        return;
    }

    const data = response.body.currently;
    log(chalk.blue(`It is currently ${data.temperature} degrees out. There is a ${data.precipProbability}% chance of rain`));
})

request({url : mapBoxAPi, json: true}, (error, response) => {

    if(error) {
        console.log(error);
        return;
    } else if (response.body.message) {
        log(chalk.red(response.body.message));
        return;
    }
    else if (response.body.features.length <= 0) {
        log(chalk.red('No Results for this location'));
        return;
    }
    
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1];
    log(`Latitude: ${response.body.features[0].center[0]} & Longitude: ${response.body.features[0].center[1]}`);
})