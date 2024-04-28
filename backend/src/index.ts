const express = require('express');
// const path = require('path');
// require('dotenv').config({path: '../../.env'});

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(process.env.API_PORT, () => {
  console.log(`Server is running on port ${process.env.API_PORT}`);
});
