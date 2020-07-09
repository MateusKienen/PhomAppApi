module.exports = (sequelize, Sequelize) => {
  const Foto = sequelize.define("fotos", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descricao: {
      type: Sequelize.STRING,
    },
    dt_foto: {
      type: Sequelize.DATE,
    },
    latitude: {
      type: Sequelize.STRING
    },
    longitude: {
      type: Sequelize.STRING
    },
    arq_foto: {
      type: Sequelize.STRING 
    },
    usuario_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "usuarios",
        key: "id",
      },
    },
  });

  return Foto;
};
