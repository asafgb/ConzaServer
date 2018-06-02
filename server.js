var requests = require('request');
var fs = require('fs');
const fetch = require('node-fetch');
const  express =require("express");
var bodyParser = require('body-parser');
const app = express();
const port =5000;
var jsonParser = bodyParser.json()

app.listen(port, ()=> console.log(`start on ${port}`))

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