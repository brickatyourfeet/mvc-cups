const glasses = require('../models/glass.model.js')

const getAllGlasses = (req, res) => {
  res.json(glasses)
}


module.exports = {
  getAllGlasses
}
