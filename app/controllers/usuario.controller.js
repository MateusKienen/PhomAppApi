const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

//create
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nome) {
    res.status(400).send({
      message: "O campo não pode ser vazio",
    });
    return;
  }

  // Create object
  const usuario = {
    nome: req.body.nome,
    senha: req.body.senha,
    email: req.body.email,
  };

  // Insert user in db
  Usuario.create(usuario)
    .then((data) => {
      res.send({
        message: "1",
        status: "Success",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "-1",
        status: "Erro ao inserir usuário " + err,
      });
    });
};

// Get all users
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Usuario.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro na busca dos usuários",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

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

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Usuario.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "1",
          status: "success",
        });
      } else {
        res.send({
          message: "0",
          status: "Usuário não foi encontrado",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "-1",
        status: "Erro ao atualizar usuário " + err,
      });
    });
};

//usado por outra rota..... /auth
exports.authenticate = (req, res) => {
  Usuario.findOne({
    where: { [Op.and]: [{ email: req.body.email }, { senha: req.body.senha }] },
  })
    .then((data) => {
      if (data != null){
        res.send(data);
      }
      else {
        res.status(404).send( {message: "usuário inexistente", status: "-1"});
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro",
      });
    });
};
