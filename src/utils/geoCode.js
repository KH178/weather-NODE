const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?&access_token=pk.eyJ1Ijoia2gxMjEiLCJhIjoiY2p5NzFhcTNwMDBlazNkbnltNzZxMWZiMyJ9.wrevM_qVDEEQUDW2KoN8Wg&limit=1';

    request({
        url,
        json: true
    }, (err, {body}) => {
        if (err) {
            callback('unable to connect to location services!',undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined,{
                place : body.features[0].place_name,
                lati : body.features[0].center[1],
                longi : body.features[0].center[0]
            });
        }
    })
}

module.exports =  geocode