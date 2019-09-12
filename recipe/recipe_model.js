const db = require('../data/db-config.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions

}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('recipes as r')
    .join('quantities as q', 'r.id', 'q.recipe_id')
    .join('ingredients as i', 'q.ingredient_id', 'i.id')
    .select('q.recipe_id', 'r.recipe_name', 'i.ingredient_name', 'q.quantity')
    .where('r.id', recipe_id)
    .then(list => {
        return list
    })
}

function getInstructions(recipe_id) {
    return db('recipes as r')
    .join('steps_list as s', 'r.id', 's.recipe_id')
    .where('r.id', recipe_id)
    .select('s.recipe_id', 'r.recipe_name', 's.step_name')
}
