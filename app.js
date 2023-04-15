// const movieRoute = require('./Route/movieRoute')
const carRoute = require('./Route/carRoute')
const express = require('express');
const mongoose = require('mongoose');

require('dotenv/config')

const app = express();

// Middleare 
app.use(express.json());

// By default Route 
app.get('/', (req, res)=>{
    res.send('This is default route')
})

// app.use('/api/movie', movieRoute)
app.use('/api/car', carRoute)

async function main() {
    const data = await mongoose.connect(process.env.DB)
    console.log(data.default.STATES.connected);
}
main();

app.listen(process.env.PORT)