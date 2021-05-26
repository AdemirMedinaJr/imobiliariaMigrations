exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tipos').del()
    .then(function () {
      // Inserts seed entries
      return knex('tipos').insert([
        {classe: 'Casa'},
        {classe: 'Apartamento'},
        {classe: 'Lote/Terreno'},
        {classe: 'Sítio/Fazenda'},
      ]);
    });
};
