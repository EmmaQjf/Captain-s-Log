const mongoose = require('mongoose')


const logSchema = mongoose.Schema({
  title: {type: String, require: true},
  entry: {type: String, require: true},
  shipIsBroken: Boolean
})

const Log = mongoose.model('Log', logSchema)
module.exports = Log