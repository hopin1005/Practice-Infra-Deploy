const express = require('express');
const app = express();
const port = 3000;

app.get('/backend', (req, res) => {
  res.send('hi, this is response from backend!\n');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
