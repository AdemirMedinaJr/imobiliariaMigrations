const express = require("express");
const routes = express.Router();
const cors = require("cors");

routes.use(cors()); // libera todas as rotas para acesso por origens diferentes

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
  .get("/imoveis/pesq/:palavra", ImovelController.search)
  .get("/imoveis/destaques", ImovelController.destaques)
  .get("/imoveis/destaques/:id", ImovelController.show)
  .get("/imoveis/:id", ImovelController.show)
  .get("/propostas", PropostaController.index)
  .get("/propostas/:id", PropostaController.show)
  .get("/imoveis/propostas/:id", ImovelController.show)
  .get("/imoveis/destaques/pesq/:palavra", ImovelController.pesqDestaque)
  //.get("/imoveis/destaques/:id", ImovelController.destaques)
  //.get("/destaques", DestaqueController.index)
  //.get("/pesquisar/:filtro", PesquisarController.index)
  //.get("/imoveis/estatistica", EstatisticaController.index)
  
  .post("/imoveis", ImovelController.store)
  .post("/proposta/:id", PropostaController.store)
  .post("/proposta", PropostaController.store)
  .post("/propostas", PropostaController.store)
  
  .put("/imoveis/:id", ImovelController.update)
  .put("/imoveis/destaque/:id", ImovelController.destaque)
  //.put("/imoveis/:id", ImovelController.show)
  
  .delete("/imoveis/:id", ImovelController.destroy);

routes
  .get("/usuarios", UsuarioController.index)
  .post("/usuarios", UsuarioController.store)
  .post("/login", UsuarioController.login);

module.exports = routes;
