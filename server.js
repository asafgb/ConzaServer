var requests = require('request');
var fs = require('fs');
const fetch = require('node-fetch');
const  express =require("express");
var bodyParser = require('body-parser');
const app = express();
const port =5000;
var jsonParser = bodyParser.json()
const MongoDb = require('./Utilites/MongoDb')



app.set('domain', 'myhost.whatever');
//app.set('port', process.env.PORT || 8080);

app.listen(process.env.PORT || port, ()=> console.log(`start on ${process.env.PORT || port}`))

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))



app.get('/',(req, res) =>{

    res.json(publicKey)
})


/*
Create Private Key and Public Key
*/
const RSAKey = require('react-native-rsa');
const bits = 1024;
const exponent = '10001'; // must be a string
var rsa = new RSAKey();
var r = rsa.generate(bits, exponent);
var publicKey = rsa.getPublicString();//rsa.RSAGetPublicString(); // return json encoded string
var privateKey = rsa.getPrivateString();//rsa.RSAGetPrivateString(); // return json encoded string
//MongoDb.CreateDb();
//MongoDb.CreateCollection();
MongoDb.NewUser("asaf","miew");
//MongoDb.GetAllUser();

/*
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
*/


  /* componentDidMount(){
    fetch('/api/customers')
    .then(res=>res.json())
    .then(costumer => this.setState({costumer}, ()=> console.log('loaded',costumer)));
  }*/

  

// var rsa = new RSAKey();
// rsa.setPublicString(publicKey);
// var originText = 'sample String Value';
// var encrypted = rsa.encrypt(originText);


// rsa.setPrivateString(privateKey);
// var decrypted = rsa.decrypt(encrypted); // decrypted == originText