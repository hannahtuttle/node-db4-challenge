const express = require('express')

const data = require('./recipe_model.js')

const router = express.Router()

router.get('/', (req, res) => {
    data.getRecipes()
    .then(list => {
        res.status(200).json(list)
    })
    .then(err => {
        res.status(500).json(err)
    })
})

router.get('/:id/shoppingList', (req, res) => {
    const id = req.params.id
    data.getShoppingList(id)
    .then(list => {
        res.status(200).json(list)
    })
    .then(err => {
        res.status(500).json(err)
    })
})

router.get('/:id/steps', (req, res) => {
    const id = req.params.id
    data.getInstructions(id)
    .then(steps => {
        res.status(200).json(steps)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router