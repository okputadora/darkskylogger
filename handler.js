'use strict';
require('dotenv').config()
const axios = require('axios')
const utils = require('./utils')
const mongoose = require('mongoose')
module.exports.darksky = (event, context, callback) => {
  // because we're only looking for philadelphia pa
  // we could have just looked this information up
  // but I want this to be able to handle all cities in the future
  utils.geocoder("Philadelphia, PA")
  .then(geoCode => {
    utils.darksky(geoCode)
    callback(null, response);
  })


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
