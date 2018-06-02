/*
Connect to Mongo DB
*/

//const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url ="mongodb+srv://GouchiBoi:GouchiBoi345@cluster0-atyws.mongodb.net/"
// Database Name
const dbName='Project'
const dbCollectionPersonName = 'Persons';

module.exports = 
{
    CreateDb: function(){
        var projUrl= url+dbName;
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            console.log("Database created!");
            db.close();
          });
    },

    CreateCollection: function(){
        var MongoClient = require('mongodb').MongoClient;
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbName);
            dbo.createCollection(dbCollectionPersonName, function(err, res) {
              if (err) throw err;
              console.log("Collection created!");
              db.close();
            });
          });
    },


  NewUser: function (name, password) 
  {
    const MongoClient = require('mongodb').MongoClient;
    var start = new Date();
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        var myobj = { Username: name, UserPassword: password };
        console.log("Connected successfully to server 'To Add User : "+ name + "' at "+ start.toString());
        const db = client.db(dbName);
        db.collection(dbCollectionPersonName).insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 User inserted");
            client.close();
        });
      });

  },

  GetAllUser: function () 
  {
    const MongoClient = require('mongodb').MongoClient;
    var start = new Date();
    MongoClient.connect(url, function(err, client) {
        assert.equal(null, err);
        console.log("Connected successfully to server 'To Get All Users' at "+ start.toString());
        const db = client.db(dbName);
       
      });
  }
};

const AddUser = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
      callback(result);
    });
  }