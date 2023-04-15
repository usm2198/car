const mongoose = require('mongoose')
const carSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    rating : {
       type: Number,
       required: true 
    },
    color: {
        type: String,
        required: true 
    },
    price: {
        type: Number, 
        required: true
    }
})

module.exports = mongoose.model('myCar', carSchema)