require('dotenv').config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const cors = require('cors')
app.use(cors())

// let app = express();

// **** Routers section **** (to be deleted later)
// const userRoutes = require('./routes/users.js')
// app.use('/users', userRoutes)
// const usersRouter = require('./routes/users')
// app.use('/users', usersRouter)


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// process.env.MONGODB_URL
/*mongoose.connect(
  // NEED THE ACTUAL MONGODB LINK
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    console.log("Error");
  }
);*/

mongoose.set('useFindAndModify', false);

mongoose.connect(

  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.log(err)
  );

/*
var MONGO = process.env.MONGODB_URL;
mongoose.connect(MONGO, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
}, function(err, res) {

  if (err) {
    return console.error('Error connecting to db:', err);
  }
  console.log('Connected successfully to db');
});*/

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"../frontend/build/index.html"));
    //res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  });
}else {
  app.get("/", (req, res) => {
    res.send("Api running");
  })
}

// app.use(express.static(path.join(__dirname, "../frontend/build")));

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
//});

// working api?

const api = require('./api/routes')
api(app)

app.use('/routes', require('./api/routes'));

// const register = require('./api/Users/register.js')
// register.doWork(app)

// const login = require('./api/Users/login.js')
// login.doWork(app)

// const verify = require('./api/JWT/verify.js')
// verify.doWork(app)

// const refresh = require('./api/JWT/refresh.js')
// refresh.doWork(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});