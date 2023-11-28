const express = require('express')

const cors=require('cors')
const app = express()

app.use(cors());


app.get('/', function (req, res) {
  res.send('backend  nuevo node js')
});



const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const test= require('./data');
app.get('/tienda',(req,res) => res.json({total:test.length, status: 200, test }));
