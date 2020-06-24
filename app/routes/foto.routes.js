module.exports = app => {
    const foto = require("../controllers/fotos.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", foto.create);
  
    router.get("/:idu", foto.findAll);
    
   // router.get("/:idu&:idf", foto.findOne);
  
    app.use('/api/foto', router);
  };