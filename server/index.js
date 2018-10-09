require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Port = 3001;
const session = require("express-session");
const massive = require("massive");
const { registerNewUser, loginNewUser } = require("./controller/controller");
const { getUser } = require("./controller/getUser_controller");
const checkForSession = require("./middlewares/checkforSession");
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(checkForSession);
app.get("/api/getUser", getUser);
app.post("/api/register", registerNewUser);
app.post("/api/login", loginNewUser);

app.listen(Port, () => console.log(`Listening on Port ${Port}`));
