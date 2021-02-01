"use strict";
const express = require('express')
const bodyParser = require('body-parser')
const router = require("./routes/api");
var cors = require('cors')
const PORT = process.env.PORT || 8080
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, ()=>console.log(`Listen to Port: ${PORT}`));

module.exports = {app}

