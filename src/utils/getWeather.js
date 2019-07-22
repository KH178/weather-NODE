const request = require('request');

const getWeather = (latitude,longitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/6401b5c6a2084a9c01f86c5e0c4b1637/' + latitude + ',' + longitude + '?units=si&lang=en';
    request({
        url : url,
        json : true
    },(err,{body})=>{
        if(err){
            callback('unable to connect to weather service!',undefined);
        }
        else if(body.error){
            callback('Unable to find location',undefined);
        }
        else{
            callback(undefined, {
                summary : body.daily.data[0].summary,
                temprature : body.currently.temperature,
                probabilityForRain: ((body.daily.data[0].precipProbability) * 100).toFixed(2),
                icon : body.daily.data[0].icon

            })
            
        }
    })
}

module.exports = getWeather;