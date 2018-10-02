const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Port = 3001;

app.use(bodyParser.json());

app.listen(Port, () => console.log(`Listening on Port ${Port}`));
