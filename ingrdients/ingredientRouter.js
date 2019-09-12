const express = require('express')

const data = require('./ingredient_models.js')

const router = express.Router()

router.get('/:id/recipes', (req, res) => {
    const id = req.params.id
    data.getRecipeFromIngredient(id)
    .then(ing => {
        res.status(200).json(ing)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router