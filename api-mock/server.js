'use strict';
import {saveDataToFile} from './save-data.js'
import express from 'express';

// Constants
const PORT = 4000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World! This is api get route');
});

app.post('/', (req, res) => {
  console.log("API recieved this data",req.body);
  // create a file and write to a file
  saveDataToFile(req.body);
  res.json({result: 'data saved'});
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);