const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//"meio que registra o banco"
const db = require("./app/models");
db.sequelize.sync();

//app.use(express.static("documentation"));

//const viewUri = require('./app/documentation/index.html');
// simple route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//app.use('/', express.static('app', options));

//registro das rotas de uma controller (tem que fazer pra todas sepa)
//require("./app/routes/tutorial.routes")(app);
require("./app/routes/usuario.routes")(app);
require("./app/routes/alergias.routes")(app);
require("./app/routes/medicamentos.routes")(app);
require("./app/routes/infoBasicas.routes")(app);
require("./app/routes/cirurgias.routes")(app);
require("./app/routes/doencas.routes")(app);
require("./app/routes/auth.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
