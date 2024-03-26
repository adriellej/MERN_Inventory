const Inventory = require('../models/inventoryModel')
const mongoose = require('mongoose')

// get all inventory item
const getItems = async (req, res) => {
	const items = await Inventory.find({}).sort({createdAt: -1})

	res.status(200).json(items)
}

// get a single inventory item
const getItem = async (req, res) => {
	const { id } = req.params

	if(!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: 'No such item'})
	}

	const item = await Inventory.findById(id)

	if (!item) {
		return res.status(404).json({error: 'No such item'})
	}

	res.status(200).json(item)
}


// create new inventory item
const createItem = async (req, res) => {
	
	// add to db
	try {
		const { currentOwner, ...otherProperties } = req.body

		const item = await Inventory.create({ 
			currentOwner,
            ...otherProperties
		})
		
		res.status(200).json(item)
	}
	catch (error) {
		res.status(400).json({error: error.message})
	}
}

// delete a inventory item
const deleteItem = async (req, res) => {
	const { id } = req.params 

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: 'No such item'})
	}

	const item = await Inventory.findOneAndDelete({ _id: id })
	
	if (!item) {
		return res.status(404).json({error: 'No such item'})
	}

	res.status(200).json(item)
}

// update an inventory item
const updateItem = async (req, res) => {
	const { id } = req.params 

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({error: 'No such item'})
	}

	const item = await Inventory.findOneAndUpdate(
		{ _id: id }, 
		{ ...req.body },
		{ new: true} 
	)
	
	if (!item) {
		return res.status(404).json({error: 'No such item'})
	}

	res.status(200).json(item)
}


module.exports = { 
	createItem,
    deleteItem,
    updateItem,
    getItems,
    getItem
}