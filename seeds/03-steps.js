
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps_list').insert([
        {step_name: 'prepare', recipe_id: 1},
        {step_name: 'cook', recipe_id: 1},
        {step_name: 'eat', recipe_id: 1},
        {step_name: 'prepare', recipe_id: 2},
        {step_name: 'cook', recipe_id: 2},
        {step_name: 'eat', recipe_id: 2},
        {step_name: 'prepare', recipe_id: 3},
        {step_name: 'cook', recipe_id: 3},
        {step_name: 'eat', recipe_id: 3},
      ]);
    });
};
