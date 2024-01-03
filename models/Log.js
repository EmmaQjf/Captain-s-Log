const mongoose = require('mongoose')


const logSchema = mongoose.Schema({
  title: {type: String, required: true},
  entry: {type: String, required: true},
  shipIsBroken: Boolean
})

const Log = mongoose.model('Log', logSchema)

module.exports = Log