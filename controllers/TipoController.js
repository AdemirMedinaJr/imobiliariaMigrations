const knex = require ("../database/dbConfig");

module.exports = {

    async index(req, res) {
        const tipos = await knex ("tipos").orderBy("classe");
        res.status(200).json(tipos);
    },

    async tipos_imoveis(req, res) {
        const tipos = await knex
          .select("t.classe")
          .count("i.id as num")
          .from("tipos as t")
          .leftOuterJoin("imoveis as i", "t.id", "i.tipo_id")
          .groupBy("t.classe")
          .having("num", ">", 0)
    
        res.status(200).json(tipos);
      }
};