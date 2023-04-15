const {getMovie,getOneMovie,putMovie,postMovie,deleteMovie} = require('../Controller/movieController')

const route = require('express').Router()

// Get Route
route.get('/', getMovie)

// Get One Route 
route.get('/:id', getOneMovie)

// Post Route
route.post('/', postMovie)

// Put Route
route.put('/:id', putMovie)

// Delete Route
route.delete('/:id', deleteMovie)

module.exports = route