const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hi this is frontend website!!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
