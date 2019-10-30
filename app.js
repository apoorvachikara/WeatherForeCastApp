
const log = console.log;
const colors = require('./util/chalk');
const geocode = require('./util/geocode');
const forecast = require('./util/forecast');

const geoCodeLocation = process.argv[2];

if (!geoCodeLocation) {
    log(colors.red('Please provide the address'));
    return;
}

//Get lat and long 
geocode(geoCodeLocation, (error, {latitude, longitude, place}) => {
        if (error) {
            log(error);
            return;
        }

        log(colors.green(`${latitude} && ${longitude} && ${place}`));

        // /get Forecast details
            forecast(latitude, longitude, (error, foreCastData) => {
                if (error) {
                    log(colors.red(error));
                    return;
                }
                log(colors.blue(foreCastData));
            })

})
