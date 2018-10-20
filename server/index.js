require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.DATABASE_STRING, { scripts: __dirname + '/db'})
  .then(db => {
    app.set('db', db);
    console.log('database is connected');
  })
  .catch(err => {
    console.log('database connection error', err);
  })

const port = 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})