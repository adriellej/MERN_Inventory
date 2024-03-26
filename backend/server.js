require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const inventoryRoute = require('./routes/inventoryRoutes')

const app = express()

app.use(express.json())
app.use('/api/inventory/', inventoryRoute)

PORT = process.env.PORT || 4000
// connect to db
const connectdb = () => {
    mongoose.connect(process.env.MONGO_URI)
	.then(() => {
		// listen for requests
		app.listen(PORT, () => {
        console.log(`Server is connected to db and is running on port ${PORT}`)
    })

	})
	.catch((error) => {
		console.log(error)
	})
}

connectdb()
