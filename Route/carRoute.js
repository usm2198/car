const { getcar, getOnecar, deletecar,postcar,putcar } = require('../Controller/carController')

const route = require('express').Router()

route.get('/', getcar)

route.get('/:id', getOnecar)

route.post('/', postcar)

route.put('/:id', putcar)

 route.delete('/:id', deletecar)

 module.exports = route