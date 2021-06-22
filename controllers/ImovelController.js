const knex = require("../database/dbConfig");

module.exports = {
  // index: listagem
  // store/create: inclusão
  // update: alteração
  // show: retornar 1 registro
  // destroy: exclusão

  async index(req, res) {
    //const carros = await knex("carros").orderBy("id", "desc");
    // const carros = await knex("carros")
    //    .join("marcas", "carros.marca_id", "=", "marcas.id")
    //    .orderBy("carros.id", "desc");

    const imoveis = await knex
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
      .orderBy("i.id", "desc");

    res.status(200).json(imoveis);
  },

  async store(req, res) {
    // faz a desestruturação do objeto req.body
    const { cidade, tipo_id, bairro, area, nº_quartos, nº_banheiros, preco, foto } = req.body;

    // validação para os campos
    if ( !cidade || !tipo_id || !bairro || !area || !nº_quartos || !nº_banheiros || !preco || !foto ) {
      res.status(400).json({
        erro: "Enviar cidade, tipo_id, bairro, área, nº de quartos, nº de banheiros, preço e foto do imóvel",
      });
      return;
    }

    try {
      const novo = await knex("imoveis").insert({
        cidade,
        tipo_id,
        bairro,
        area,
        nº_quartos,
        nº_banheiros,
        preco,
        foto
      });
      res.status(201).json({ id: novo[0] });
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },
};
