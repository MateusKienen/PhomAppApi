module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("usuario", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING,
    },
    senha: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    ativo: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Usuario;
};
