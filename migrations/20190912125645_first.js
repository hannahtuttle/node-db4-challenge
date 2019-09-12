
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 500);
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 500);

      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');
  })
  .createTable('steps_list', tbl => {
      tbl.increments();
      tbl.string('step_name').notNullable();

      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')// if primary key record is deleted
        .onUpdate('CASCADE')// if primary key value updateds
  })
  .createTable('quantities', tbl => {
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');

      tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')// if primary key record is deleted
        .onUpdate('CASCADE')// if primary key value updateds

      tbl.integer('quantity').notNullable();

      tbl.primary(['recipe_id', 'ingredient_id'])
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('quantities')
    .dropTableIfExists('ingredients').dropTableIfExists('recipes')
};
