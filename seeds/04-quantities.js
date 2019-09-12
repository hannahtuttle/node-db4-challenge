
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantities').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantities').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 10},
        {recipe_id: 1, ingredient_id: 2, quantity: 5},
        {recipe_id: 1, ingredient_id: 3, quantity: 1},
        {recipe_id: 1, ingredient_id: 4, quantity: 2},
        {recipe_id: 2, ingredient_id: 4, quantity: 12},
        {recipe_id: 2, ingredient_id: 5, quantity: 10},
        {recipe_id: 2, ingredient_id: 6, quantity: 10},
        {recipe_id: 2, ingredient_id: 7, quantity: 11},
        {recipe_id: 3, ingredient_id: 8, quantity: 8},
        {recipe_id: 3, ingredient_id: 9, quantity: 10},
      ]);
    });
};
