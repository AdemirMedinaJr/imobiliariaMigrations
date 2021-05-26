const knex = require("../database/dbConfig");

module.exports = {
  async store(req, res) {
    // para alteração do registro através do id informado
    // ou: const { id } = req.params
    const id = req.params.id;
    const { proposta } = req.body;
    try {
      await knex("propostas").update({ proposta }).where({ id }); // ou: .where('id', id)
      res.status(200).json({ msg: "Proposta enviada com sucesso!" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },
};
