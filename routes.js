const express = require("express");
const routes = express.Router();
const cors = require("cors");

routes.use(cors()); // libera todas as rotas para acesso por origens diferentes

const DestacarController = require("./controllers/DestacarController");
const DestaqueController = require("./controllers/DestaqueController");
const EstatisticaController = require("./controllers/EstatisticaController");
const ImovelController = require("./controllers/ImovelController");
const PesquisarController = require("./controllers/PesquisarController");
const PropostaController = require("./controllers/PropostaController");
const UsuarioController = require("./controllers/UsuarioController");
const TipoController = require("./controllers/TipoController");
const login = require(".//middleware/login");

routes
  .get("/imoveis", ImovelController.index)
<<<<<<< HEAD
  .get("/tipos", TipoController.index)
=======
>>>>>>> 53f71c92757211960fc51225fde904da7f988d53
  .get("/destaques", DestaqueController.index)
  .get("/pesquisar/:filtro", PesquisarController.index)
  .get("/imoveis/estatistica", EstatisticaController.index)
  .put("/destacar/:id", DestacarController.update)
  .post("/proposta/:id",login, PropostaController.store)
  .post("/imoveis",login, ImovelController.store);

routes
  .get("/usuarios", UsuarioController.index)
  .post("/usuarios", UsuarioController.store)
  .post("/login", UsuarioController.login);

module.exports = routes;
