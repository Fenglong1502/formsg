const express = require('express');
const app = express();

// Testing on get api
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

const port = 3000;
app.listen(port, console.log(`Server is listening to port ${port}...`));
