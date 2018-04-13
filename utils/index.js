const geocoder = require('geocoder');
const axios = require('axios');
const Prediction = require('../models/Prediction')
module.exports = {
  geocode: (location) => {
    return new Promise((resolve, reject) => {
      geocoder.geocode(location, (err, data) => {
        if (err){
          reject(err);
          return;
        }
        console.log(data)
        var geocode = data.results[0].geometry.location;
        resolve(geocode);
      })
    })
  },

  darksky: (geocode) => {
    return new Promise((resolve, reject) => {
      axios.get('https://api.darksky.net/forecast/'+
      process.env.DARKSKY_API_KEY + '/' +
      geocode.lat + ',' + geocode.lng)
      .then(response => {
        console.log(response.hourly.data)
        resolve(response.hourly.data)
      })
    })
  },

  post: (data) => {

  }
}
