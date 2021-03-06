const winston = require("winston");
const express = require("express");
const config = require("config");
const app = express();

require("./startup/logging")();
require("./startup/cors")(app);
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);

const PORT = process.env.PORT || config.get("port");
const server = app.listen(PORT, () =>
    winston.info(`Listening on port ${PORT}...`)
);

module.exports = server;
