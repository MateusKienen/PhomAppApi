const db = require("../models");
const Foto = db.Foto;
const Op = db.Sequelize.Op;

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
  Usuario.create(foto)
    .then((data) => {
      res.send({
        message: "1",
        status: "Success",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "-1",
        status: "Erro ao inserir foto " + err,
      });
    });
};

// Get all fotos
exports.findAll = (req, res) => {
  const idUser = req.query.idu;
  
  Usuario.findAll({ where: { usuario_id: idUser } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro na busca da foto",
      });
    });
};

// Find a single Tutorial with an id
//MÉTODO NÃO FINALIZADO AINDA PARA TESTES
exports.findOne = (req, res) => {
  const idUser = req.query.idu;
  const idFoto = req.query.idf;

  Usuario.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro na busca do usuário " + id,
      });
    });
};
