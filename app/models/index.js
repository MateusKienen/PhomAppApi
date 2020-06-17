const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.usuarios = require("./usuario.model.js")(sequelize, Sequelize);
db.alergias = require("./alergias.model.js")(sequelize, Sequelize);
db.cirurgias = require("./cirurgias.model.js")(sequelize, Sequelize);
db.medicamentos = require("./medicamentos.model.js")(sequelize, Sequelize);
db.doencas = require("./doencas.model")(sequelize, Sequelize);
db.infosBasicas = require("./infoBasicas.model")(sequelize, Sequelize);

module.exports = db;
