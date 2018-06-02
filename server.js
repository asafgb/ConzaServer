var requests = require('request');
var fs = require('fs');
const fetch = require('node-fetch');
const  express =require("express");
var bodyParser = require('body-parser');
const app = express();
const port =5000;
var jsonParser = bodyParser.json()


app.set('domain', 'myhost.whatever');
//app.set('port', process.env.PORT || 8080);

app.listen(process.env.PORT || port, ()=> console.log(`start on ${process.env.PORT || port}`))

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))



app.get('/api/customers',(req, res) =>{
  /*  const customers = [
        {id:1, firstName: 'asaf', lastName: 'sh'},
        {id:2, firstName: 'asaf', lastName: 'sh1'},
        {id:3, firstName: 'asaf3', lastName: 'sh'},
    ];

    res.json(customers);*/
})


/*
Create Private Key and Public

*/
var RSAKey = require('react-native-rsa');
const bits = 1024;
const exponent = '10001'; // must be a string
var rsa = new RSAKey();
var r = rsa.generate(bits, exponent);
var publicKey = rsa.getPublicString();//rsa.RSAGetPublicString(); // return json encoded string
var privateKey = rsa.getPrivateString();//rsa.RSAGetPrivateString(); // return json encoded string




/*
Connect to Mongi


*/

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
//const url = 'mongodb://AsafUser:wc4LoXqMDqoKYRXS@cluster0-shard-00-00-8exny.mongodb.net:27017,cluster0-shard-00-01-8exny.mongodb.net:27017,cluster0-shard-00-02-8exny.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
//const url = 'mongodb+srv://Asafgb:Asafgb@cluster0-8exny.mongodb.net/test?retryWrites=true'
const url ='mongodb+srv://Tester:Tester@cluster0-8exny.mongodb.net/test'
// Database Name
const dbName = 'asafgb';

const insertDocuments = function(db, callback) {
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


  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }

// Use connect method to connect to the server

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    insertDocuments(db, function() {
        findDocuments(db, function() {
          client.close();
        });
      });
  });



  

// var rsa = new RSAKey();
// rsa.setPublicString(publicKey);
// var originText = 'sample String Value';
// var encrypted = rsa.encrypt(originText);


// rsa.setPrivateString(privateKey);
// var decrypted = rsa.decrypt(encrypted); // decrypted == originText