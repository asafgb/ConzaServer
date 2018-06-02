/*
Connect to Mongo DB
*/

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url ='mongodb+srv://WebUser:ScarCasem@cluster0-8exny.mongodb.net/test'
// Database Name
const dbName = 'asafgb';

module.exports = 
{
  // This is the function which will be called in the main file, which is server.js
  // The parameters 'name' and 'surname' will be provided inside the function
  // when the function is called in the main file.
  // Example: concatenameNames('John,'Doe');
  concatenateNames: function (name, surname) 
  {
     var wholeName = name + " " + surname;

     return wholeName;
  },

  sampleFunctionTwo: function () 
  {

  }
};
