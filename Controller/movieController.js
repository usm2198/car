const Movie = require('../Model/movie')

// Get Logic 

exports.getMovie = async (req, res)=>{
    try {
        const data = await Movie.find()
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message})
    }
}

// Post logic

exports.postMovie = async (req, res)=>{
    try {
        const data = await Movie.create(req.body)
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message : error.message})
    }
}

// Put Logic / Update

exports.putMovie = async (req, res)=>{
    try {
        const data = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json({errors: false, data : data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message})
    }
}

// Delete Logic 
exports.deleteMovie = async (req, res)=>{
    try {
        const data = await Movie.findByIdAndDelete(req.params.id)
        return res.json({errors: false, data: data})
    } catch (error) {
       return res.status(400).json({errors: true, message: error.message}) 
    }
}

// Get One 
exports.getOneMovie = async (req, res)=>{
    try {
        const data = await Movie.findById(req.params.id)
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.messgae})
    }
}
