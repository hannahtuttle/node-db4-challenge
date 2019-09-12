const express = require('express');

const recipeRouter = require('./recipe/recipe_router.js')
const ingredientRouter = require('./ingrdients/ingredientRouter.js')
const server = express();

server.use(express.json());
server.use('/recipes', recipeRouter)
server.use('/ingredients', ingredientRouter)

module.exports = server;