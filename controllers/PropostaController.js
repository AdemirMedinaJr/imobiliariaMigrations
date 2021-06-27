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

  async store(req, res) {
    // para alteração do registro através do id informado
    // ou: const { id } = req.params
    const id = req.params.id;
    const { nome, email, proposta, imovel_id } = req.body;
    try {
      await knex("propostas").insert({ nome, email, proposta, imovel_id }).where({ id }); // ou: .where('id', id)
      res.status(200).json({ msg: "Proposta enviada com sucesso!" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },

  async index(req, res) {
    try {
      const proposta = await knex("propostas").orderBy("id", "asc");
      res.status(200).json(proposta);
    } catch (error) {
      res.status(203).json({ msg: error.message });
    }
  },

  async show(req, res) {
    const id = req.params.id; // ou:  const { id } = req.params

    const imovel = await knex
      .select(
        "i.id",
        "i.cidade",
        "t.classe as tipo",
        "i.bairro",
        "i.area",
        "i.nº_quartos",
        "i.nº_banheiros",
        "i.preco",
        "i.foto",
        "i.destaque"
      )
      .from("imoveis as i")
      .leftJoin("tipos as t", "i.tipo_id", "t.id")
      .where("i.id", id);
    res.status(200).json(imovel[0]);
  },
  
  // async index(req, res) {
  //   try {
  //     const proposta = await knex("propostas").where("id" == id);
  //     res.status(200).json(proposta);
  //   } catch (error) {
  //     res.status(203).json({ msg: error.message });
  //   }
  // },

};
