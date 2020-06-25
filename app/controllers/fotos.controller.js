const db = require("../models");
const Foto = db.Foto;
const Op = db.Sequelize.Op;
var fs = require('fs');

//create
exports.create = (req, res) => {
  // Validate request
  if (!req.body.arq_foto) {
    res.status(400).send({
      message: "O campo não pode ser vazio",
    });
    return;
  }

  // Create object
  const foto = {
    descricao: req.body.descricao,
    dt_foto: req.body.dt_foto,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    arq_foto: req.body.arq_foto,
    usuario_id: req.body.usuario_id
  };

  // Insert foto in db
  try{
    Foto.create(foto)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(200).send({
        message: "-1",
        status: "Erro ao inserir foto " + err,
      });
    });
  } catch(e) {
    fs.appendFile('C:\\Projetos_git\\PhomAppAPI\\logger.txt', e);
  }
};
  
// Get all fotos
exports.findAll = (req, res) => {
  const idUser = req.query.idu;
  
  Foto.findAll({ where: { usuario_id: idUser } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro na busca da foto",
      });
    });
};
