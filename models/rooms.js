const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomsSchema = new Schema({

    roomType: {
        type: String,
        required: true
    },

    landlordId: {
        type: Schema.Types.ObjectId,
        required: true
    },

    personCapacity: {
        type: String,
        required: true
    },

    bathroomAttach: {
        type: String,
        required: true
    },

    wifiAvailable: {
        type: String,
        required: true
    },

    kitchenAvailable: {
        type: String,
        required: true
    },

    waterElectricityInclude: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    },

    roomAddress: {
        type: String,
        required: true
    },

    remark: {
        type: String,
    },

    image_public_id: {
        type: Array,
        required: true
    },

    uploadDate: {
        type: String,
        required: true
    },

    uploadTime: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Rooms', roomsSchema);