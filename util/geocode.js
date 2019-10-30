const request = require('request');

const geocode = (address, cb) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=pk.eyJ1IjoiYXBvb3J2YWNoaWthcmExOCIsImEiOiJjazI0anU0c28weDljM2JtejdmYmo0anliIn0.eis3kuSZ8kd7MCOeZvPBUw`;
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
        else if (data.features.length <= 0) {
            cb('No Results for this location');
            return;
        }
        
        const longitude = data.features[0].center[0]
        const latitude = data.features[0].center[1];
        const place = data.features[0].place_name;
        cb(undefined, 
                {
                 latitude, 
                 longitude,
                 place
                }
        );
    });
}

module.exports = geocode;