const db = require("../models");
const Foto = db.fotos;
const Op = db.Sequelize.Op;

//create
exports.create = (req, res) => {

  // Create object
  const foto = {
    descricao: req.body.descricao,
    dt_foto: req.body.dt_foto,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    arq_foto: req.body.arq_foto,
    usuario_id: req.body.usuario_id,
  };

  // Insert foto in db

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
};

// exports.findAllByUserId = (req, res) => {
//   const idUser = req.params.idu;

//   Foto.findAll({
//     where: {
//       usuario_id: {
//         [Op.eq]: idUser,
//       },
//     },
//   })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Ocorreu um erro na busca da foto",
//       });
//     });
// };

exports.findAllByUserId = (req, res) => {
  const zid_usuario = req.params.idu;

  Foto.findAll({
    where: {
      usuario_id: {
        [Op.eq]: zid_usuario,
      },
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro na busca",
      });
    });
};