const express = require('express');
const app = express();
const port = 3005;
const axios = require('axios');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const axiosInstance = axios.create({
  baseURL: 'https://victraffic-api.wd.com.au/api/v3',
  timeout: 30000
});

app.get('/incidents', (req, res) =>
  axiosInstance.get('/incidents').then(response => res.send(response.data))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
