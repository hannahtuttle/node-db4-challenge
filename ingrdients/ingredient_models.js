const db = require('../data/db-config.js')

module.exports = {
   getRecipeFromIngredient

}

function getRecipeFromIngredient(id){
    return db('ingredients as i')
    .join('recipes as r', 'i.recipe_id', 'r.id')
    .where('i.id', id)
    .select('i.id', 'i.ingredient_name','r.recipe_name')
    
}