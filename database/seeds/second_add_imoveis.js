exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('imoveis').del()
    .then(function () {
      // Inserts seed entries
      return knex('imoveis').insert([
        {cidade: "Pelotas", tipo_id: 2, bairro: "Centro", area: "200 m²", nº_quartos: 4, nº_banheiros: 3, preco: 800000, foto: "https://www.exclusivesul.com.br/uploads/imovel/galeria/big-9f315ecbff84fc13198b6318be1fe857.jpg"},
        {cidade: "Pelotas", tipo_id: 1, bairro: "Três Vendas", area: "160 m²", nº_quartos: 3, nº_banheiros: 3, preco: 660000, foto: "https://www.villar.cc/uploads/imovel/galeria/big-520375b8dd087f472ba42fad245e98b2.jpg", destaque: true},
        {cidade: "Pelotas", tipo_id: 3, bairro: "Laranjal", area: "464 m²", nº_quartos: 0, nº_banheiros: 0, preco: 265000, foto: "https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/d7e7f34b8db8380c4207d7359f7dc228.jpg", destaque: true},
        {cidade: "Pelotas", tipo_id: 4, bairro: "Areal - Estrada do Cotovelo", area: "530000 m²", nº_quartos: 4, nº_banheiros: 3, preco: 6000000, foto: "https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/b656dfcf8f4d5213b4aa34f02012d301.jpg"},
        {cidade: "Pelotas", tipo_id: 2, bairro: "Centro", area: "100 m²", nº_quartos: 3, nº_banheiros: 1, preco: 375000, foto: "https://resizedimgs.vivareal.com/fit-in/870x653/vr.images.sp/96c7529462089b505f90e43d95b62290.jpg"},
       
      ]);
    });
};