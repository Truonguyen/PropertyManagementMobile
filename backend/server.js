require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


// **** Routers section **** (to be deleted later)
// const userRoutes = require('./routes/users.js')
// app.use('/users', userRoutes)
// const usersRouter = require('./routes/users')
// app.use('/users', usersRouter)


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// process.env.MONGODB_URL
mongoose.connect(
  // NEED THE ACTUAL MONGODB LINK
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    console.log(error);
  }
);


app.use(express.static(path.join(__dirname, "../frontend/build")));


app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});


// working api?
// https://media1.tenor.com/images/8685b235a52e66b6a3a953aba42334e3/tenor.gif?itemid=9614961
const register = require('./api/Users/register.js')
register.doWork(app)

const login = require('./api/Users/login.js')
login.doWork(app)

const verify = require('./api/JWT/verify.js')
verify.doWork(app)

const refresh = require('./api/JWT/refresh.js')
refresh.doWork(app)


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

