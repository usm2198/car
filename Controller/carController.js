const car = require('../Model/car');

exports.getcar = async (req,res)=>{
    try {
        const data = await car.find()
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message})
    }
}

exports.postcar = async (req, res)=>{
    try {
        const data = await car.create(req.body)
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message})
    }
}

exports.putcar = async (req, res)=>{
    try {
        const data = await car.findByIdAndUpdate(req.params.id, req.params, {new: true})
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message})
    }
}

exports.deletecar = async (req, res)=>{
    try {
        const data = await car.findByIdAndDelete(req.params.id)
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message}) 
    }
}

exports.getOnecar = async (req, res)=>{
    try {
        const data =  await car.findById(req.params.id)
        return res.json({errors: false, data: data})
    } catch (error) {
        return res.status(400).json({errors: true, message: error.message})
    }
}
