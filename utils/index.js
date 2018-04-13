const geocoder = require('geocoder');
const axios = require('axios');
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

  }
}
