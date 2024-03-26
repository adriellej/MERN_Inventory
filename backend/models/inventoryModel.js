const mongoose = require('mongoose')

const inventorySchema = new mongoose.Schema(
    {
        inUse: {
            type: Boolean,
            required: true,
            default: false
        },
        currentOwner: {
            type: String,
            required: true,
            default: "None"
        },
        serialNumber: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        issuedDateToCurrentOwner: {
            type: Date,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        processor: {
            type: String,
            required: true
        },
        ram: {
            type: String,
            required: true
        },
        storage: {
            type: String,
            required: true
        },
        purchasedDate: {
            type: Date,
            required: true
        },
        company: {
            type: String,
            required: true
        },
        department: {
            type: String,
            required: true
        },
        accounts: {
            type: Array,
            required: true
        },
        notes: {
            type: String
        },
        remarks: {
            type: String
        }
    }, 
    {
        timestamps: true
    }
)

// Modifying toJSON method to format dates in ISO format
inventorySchema.methods.toJSON = function() {
    const inventoryObject = this.toObject();
    inventoryObject.issuedDateToCurrentOwner = this.issuedDateToCurrentOwner.toISOString().split('T')[0];
    inventoryObject.purchasedDate = this.purchasedDate.toISOString().split('T')[0];
    return inventoryObject;
};

module.exports = new mongoose.model('Inventory', inventorySchema)