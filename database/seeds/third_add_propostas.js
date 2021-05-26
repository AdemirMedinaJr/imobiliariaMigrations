exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('propostas').del()
    .then(function () {
      // Inserts seed entries
      return knex('propostas').insert([
        {proposta: "Olá. Ofereço um Corolla 2015 mais R$ 180.000,00 no neste imóvel. Grato.", imovel_id: 3},
        {proposta: "Boa noite. Aceita R$ 600.000,00 à vista nesta casa?", imovel_id: 1},
        {proposta: "Bom dia! Aceita um loft de menor valor como entrada neste apartamento? Aguardo retorno.", imovel_id: 2},
        {proposta: "Olá. Aceita R$ 350.000,00 à vista neste apartamento?", imovel_id: 5},
        {proposta: "Boa tarde. Aceita dois apartamentos e o restanto em dinheiro? Grato.", imovel_id: 4},
      ]);
    });
};
