const express = require("express");
const routes = express.Router();
const cors = require("cors");

routes.use(cors()); // libera todas as rotas para acesso(s) por origens diferentes

//const DestacarController = require("./controllers/DestacarController");
//const DestaqueController = require("./controllers/DestaqueController");
//const EstatisticaController = require("./controllers/EstatisticaController");
const ImovelController = require("./controllers/ImovelController");
//const PesquisarController = require("./controllers/PesquisarController");
const PropostaController = require("./controllers/PropostaController");
const UsuarioController = require("./controllers/UsuarioController");
const TipoController = require("./controllers/TipoController");
const login = require(".//middleware/login");

routes
  .get("/tipos", TipoController.index)
  .get("/tipos_imoveis", TipoController.tipos_imoveis);

routes
  .get("/imoveis", ImovelController.index)
  .post("/imoveis", ImovelController.store)
  .put("/imoveis/destaque/:id", ImovelController.destaque)
  .get("/imoveis/destaques", ImovelController.destaques)
  //.get("/destaques", DestaqueController.index)
  .get("/imoveis/pesq/:palavra", ImovelController.search)
  .get("/imoveis/:id", ImovelController.show)
  //.get("/pesquisar/:filtro", PesquisarController.index)
  //.get("/imoveis/estatistica", EstatisticaController.index)
  //.put("/destacar/:id", DestacarController.update)
  .post("/proposta/:id", PropostaController.store)
  .delete("/imoveis/:id", ImovelController.destroy);

routes
  .get("/usuarios", UsuarioController.index)
  .post("/usuarios", UsuarioController.store)
  .post("/login", UsuarioController.login);

module.exports = routes;
