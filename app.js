const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('layout', { title: "Jaydeep Senma" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
