const knex = require("../database/dbConfig");

module.exports = {
  // index: listagem
  // store/create: inclusão
  // update: alteração
  // show: obter 1 registro
  // destroy: exclusão

  async update(req, res) {
    const id = req.params.id;
    const { preco, cidade, bairro, area, nº_quartos, nº_banheiros } = req.body;
    try {
      await knex("imoveis")
        .update({ preco, cidade, bairro, area, nº_quartos, nº_banheiros })
        .where({ id });
      res.status(200).json();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },

  async index(req, res) {
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

  async search(req, res) {
    const palavra = req.params.palavra;

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
      .where("t.classe", "like", "%" + palavra + "%")
      .orWhere("preco", "like", "%" + palavra + "%")
      .orWhere("cidade", "like", "%" + palavra + "%")
      .orWhere("bairro", "like", "%" + palavra + "%")
      .orWhere("area", "like", "%" + palavra + "%")
      .orWhere("nº_quartos", "like", "%" + palavra + "%")
      .orWhere("nº_banheiros", "like", "%" + palavra + "%")
      .orderBy("i.id", "desc");
    res.status(200).json(imoveis);
  },

  async store(req, res) {
    console.log(req.body);

    // desestruturação do objeto request
    const {
      cidade,
      tipo_id,
      bairro,
      area,
      nº_quartos,
      nº_banheiros,
      preco,
      foto,
    } = req.body;

    if (!cidade) {
      res.status(400).json({
        erro: "faltou cidade",
      });
      return;
    }

    // se algum dos atributos não for passado
    if (
      !cidade ||
      !tipo_id ||
      !bairro ||
      !area ||
      !nº_quartos ||
      !nº_banheiros ||
      !preco ||
      !foto
    ) {
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
        foto,
      });
      res.status(201).json({ id: novo[0] });
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  },

  async destaque(req, res) {
    const id = req.params.id; // ou:  const { id } = req.params
    dados = await knex("imoveis").where({ id });

    if (dados[0].destaque) {
      try {
        await knex("imoveis").update({ destaque: 0 }).where({ id });
        res.status(200).json({ ok: 1 });
      } catch (error) {
        res
          .status(400)
          .json({ ok: 0, msg: `Erro na alteração: ${error.message}` });
      }
    } else {
      try {
        await knex("imoveis").update({ destaque: 1 }).where({ id });
        res.status(200).json({ ok: 1 });
      } catch (error) {
        res
          .status(400)
          .json({ ok: 0, msg: `Erro na alteração: ${error.message}` });
      }
    }
  },

  async destaques(req, res) {
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
      .where("i.destaque", true)
      .orderBy("i.id", "desc");
    res.status(200).json(imoveis);
  },

  async destroy(req, res) {
    const id = req.params.id; // ou:  const { id } = req.params
    try {
      await knex("imoveis").del().where({ id });
      res.status(200).json({ ok: 1 });
    } catch (error) {
      res
        .status(400)
        .json({ ok: 0, msg: `Erro na exclusão: ${error.message}` });
    }
  },

  async pesqDestaque(req, res) {
    const { palavra } = req.params;
    try {
      const pesqDest = await knex("imoveis")
        .where("cidade", "like", `%${palavra}%`)
        .andWhere("destaque", "=", true);
      res.status(200).json(pesqDest);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  },
};
