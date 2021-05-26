exports.up = (knex) => {
    return knex.schema.createTable("propostas", (table) => {
      table.increments();
      table.string("proposta", 200).notNullable();
    
      // cria campo de relacionamento com a tabela imoveis
  
      table.integer("imovel_id").notNullable().unsigned();
      table
        .foreign("imovel_id")
        .references("imoveis.id")
        .onDelete("restrict")
        .onUpdate("cascade");
  
      // cria os campos created_at e updated_at
      table.timestamps(true, true);
    });
  };
  
  exports.down = (knex) => knex.schema.dropTable("propostas");