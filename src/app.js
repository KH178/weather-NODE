const express = require('express');
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

// Define Paths For Express Config
const app = express();
const publicDirPath = path.join(__dirname, '../public');
const srcDirPath = path.join(__dirname, '../src')
const viewspath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

const geoCode = require(srcDirPath + '/utils/geoCode');
const getWeather = require(srcDirPath + '/utils/getWeather');


// Setup handlebars engine and views location.
app.set('view engine', 'hbs')
app.set('views', viewspath) 
hbs.registerPartials(partialsPath)

// Setup static directory to serve.
app.use(express.static(publicDirPath))


app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Karan Handa'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    src: '/img/robot.png',
    name: 'Karan Handa'

  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Karan Handa'

  })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Please provide an address!'
    })
  }
  geoCode(req.query.address, (err, {place,lati,longi} = {}) => {
    if (err) {
      return res.send({err})
    }
    getWeather(lati, longi,(err, {summary,probabilityForRain}) => {
      if (err) {
        return res.send({err})
      }
      return res.send({
        place : place,
        summary,
        probabilityForRain
      })
    })
  })
})


app.get('/help/*', (req, res) => {
  res.render('404help', {
    summary: 'Help artical not Found!',
    name: 'Karan Handa'
  })
})


app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    summary: 'Nothing is here, Go Back!',
    name: 'Karan Handa'
  })
})

app.listen(port, () => {
  console.log('Server Running On Port '+port);
})