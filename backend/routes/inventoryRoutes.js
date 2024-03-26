const router = require('express').Router()

const { 
	createItem,
    deleteItem,
    updateItem,
    getItems,
    getItem
} = require('../controllers/inventoryControllers')

// GET all inventory items
router.get('/', getItems)

// GET a single item
router.get('/:id', getItem)

// POST a new item
router.post('/', createItem)

// DELETE an item
router.delete('/:id', deleteItem)

// UPDATE an item
router.patch('/:id', updateItem)


module.exports = router