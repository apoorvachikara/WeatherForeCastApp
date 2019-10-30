const request = require('request');
const forecast = (lat, long, cb) => {
    const url = `https://api.darksky.net/forecast/e0a4e848ab645c1b816c6d538ff7ef20/${lat},${long}`;
    request({url, json: true}, (error, response) => {
        const {body: data} = response;
        if (error) {
            cb('Unable to connect to weather API', undefined);  
            return; 
        }
        else if (data.error) {
            cb('Unable to find the Location', undefined);
            return;
        }
    
        const currentWeather = data.currently;
        cb(undefined, `It is currently ${currentWeather.temperature} degrees out. There is a ${currentWeather.precipProbability}% chance of rain`);
    })
}

module.exports = forecast;