const express = require('express');
const axios = require('axios'); 
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hi this is frontend website!!');
});

app.get('/backend', (req, res) => {

  axios.get('http://backend-service-internal-ip/backend')
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.error(error);
      res.send('Error while connecting to backend service.');
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
