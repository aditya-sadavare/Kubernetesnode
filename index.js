const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, Bro !!!!</h1><p> Node.js app!</p>');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
