const knex = require ("../database/dbConfig");

module.exports = {

    async index(req, res) {
        const tipos = await knex ("tipos").orderBy("classe");
        res.status(200).json(tipos);
    }
};