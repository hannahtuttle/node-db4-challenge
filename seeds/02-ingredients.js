
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'tortillas', recipe_id: 1},
        {ingredient_name: 'pound(s) meat', recipe_id: 1},
        {ingredient_name: 'cup(s) cheese', recipe_id: 1},
        {ingredient_name: 'tbs hot sauce', recipe_id: 1},
        {ingredient_name: 'cup(s) of flour', recipe_id: 2},
        {ingredient_name: 'cup(s) of sugar', recipe_id: 2},
        {ingredient_name: 'apple(s)', recipe_id: 2},
        {ingredient_name: 'tsp cinnamon', recipe_id: 2},
        {ingredient_name: 'tbs butter', recipe_id: 2},
        {ingredient_name: 'tsp salt', recipe_id: 2},
        {ingredient_name: 'tbs butter', recipe_id: 3},
        {ingredient_name: 'tps salt', recipe_id: 3},
        {ingredient_name: 'pkg noodles', recipe_id: 3},
        {ingredient_name: 'can red/white sauce', recipe_id: 3}
      ]);
    });
};
