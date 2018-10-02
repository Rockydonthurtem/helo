require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Port = 3001;
const massive = require("massive");
const { postNewUser } = require("./controller/controller");
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.post("/api/postNewUser", postNewUser);

app.listen(Port, () => console.log(`Listening on Port ${Port}`));
