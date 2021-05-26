const knex = require("../database/dbConfig");

module.exports = {
  async update(req, res) {
    // para alteração do registro através do id informado
    // ou: const { id } = req.params
    const id = req.params.id;
    const { destaque } = req.body;
    try {
      await knex("imoveis").update({ destaque }).where({ id }); // ou: .where('id', id)
      res.status(200).json({ msg: "Destaque alterado com sucesso" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },
};
