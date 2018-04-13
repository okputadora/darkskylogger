'use strict';
require('dotenv').config()
const axios = require('axios')
const utils = require('./utils')
const mongoose = require('mongoose')
module.exports.darksky = (event, context, callback) => {
  // because we're only looking for philadelphia pa
  // we could have just looked this information up
  // but I want this to be able to handle all cities in the future
  // get coords
  utils.geocoder("Philadelphia, PA")
  .then(geoCode => {
    // get weather
    utils.darksky(geoCode)
    .then(forecasts => {
      // log to db
      utils.post(forecasts)
    })
    callback(null, response);
  })


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
