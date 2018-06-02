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


var RSAKey = require('react-native-rsa');
const bits = 1024;
const exponent = '10001'; // must be a string
var rsa = new RSAKey();
var r = rsa.generate(bits, exponent);
var publicKey = rsa.RSAGetPublicString(); // return json encoded string
var privateKey = rsa.RSAGetPrivateString(); // return json encoded string