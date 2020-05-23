const dotenv = require('dotenv');
const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');

//LOad env vars
dotenv.config({ path: './.env' });

//Connect to database
// connectDB();

//Route files
const socialNetwork = require('./routes/routes');

const app = express();

//Body parser
app.use(express.json());

//Mount routes
app.use('/SocialNetwork', socialNetwork);

const PORT = process.env.PORT || 9000;

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(PORT, err => {
  if (err) {
    throw new Error(err);
  }
  console.log(`We listen PORT ${PORT}`.brightYellow.underline);
});
