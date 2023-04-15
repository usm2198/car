const mongoose =  require('mongoose');
const movieSchema = new mongoose.Schema({
    title : {
        type: String,
        requied: true
    },
    rating : {
        type : Number,
        required : true
    },
    releaseYear : {
        type : Date,
        required: true
    },
    desc: {
        type: String
    }
})

module.exports = mongoose.model('myMovie',movieSchema)