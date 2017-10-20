const model = require('../models/glass.model.js')



const glasses = model.getAll()

const getAllGlasses = (req, res) => {

  res.json(glasses)
}

const createGlass = (req, res) => {
  glasses.push({ id: req.params.id, name: req.params.name })
  res.json({ id: req.params.id, name: req.params.name })
}


module.exports = {
  getAllGlasses,
  createGlass
}
