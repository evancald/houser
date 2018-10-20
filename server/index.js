require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

massive(process.env.DATABASE_STRING, { scripts: __dirname + '/db'})
  .then(db => {
    app.set('db', db);
    console.log('database is connected');
  })
  .catch(err => {
    console.log('database connection error', err);
  })

//Endpoints
app.get('/api/houses', controller.getHouses);
app.post('/api/houses', controller.addHouse);
app.delete('/api/houses/:id', controller.deleteHouse);

const port = 8080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})