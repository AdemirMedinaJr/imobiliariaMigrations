const knex = require("../database/dbConfig");

module.exports = {
  async index(req, res) {
    const { filtro } = req.params;
    try {
      const imoveis = await knex("imoveis")
        .where("cidade", "like", `%${filtro}%`)
        .orWhere("bairro", "like", `%${filtro}%`)
        .orWhere("preco", "like", `%${filtro}%`);

      res.status(200).json(imoveis);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },
};
