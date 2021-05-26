exports.up = (knex) => {
    return knex.schema.createTable("imoveis", (table) => {
      table.increments();
      table.string("cidade", 80).notNullable();
      table.string("bairro", 80).notNullable();
      table.string("area", 20).notNullable();
      table.integer("nº_quartos", 2).notNullable();
      table.integer("nº_banheiros", 2).notNullable();
      table.decimal("preco", 9.2).notNullable();
      table.string("foto").notNullable();
      table.boolean("destaque").notNullable().defaultTo(false);
  
      // cria campo de relacionamento com a tabela marcas
  
      table.integer("tipo_id").notNullable().unsigned();
      table
        .foreign("tipo_id")
        .references("tipos.id")
        .onDelete("restrict")
        .onUpdate("cascade");
  
      // cria os campos created_at e updated_at
      table.timestamps(true, true);
    });
  };
  
  exports.down = (knex) => knex.schema.dropTable("imoveis");