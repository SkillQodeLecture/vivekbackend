require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello Backend Services!!!');
});
app.get('/instagram', (req, res) => {
  res.send('Hello Instagram Services!!!');
});
app.get('/home', (req, res) => {
  res.send('Hello Home Page Services!!!');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});