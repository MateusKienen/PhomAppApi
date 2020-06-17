module.exports = app => {
    const usuario = require("../controllers/fotos.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", usuario.create);
  
    router.get("/:idu", usuario.findAll);
    
    router.get("/:idu&:idf", usuario.findOne);
  
    app.use('/api/foto', router);
  };