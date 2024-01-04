const mongoose = require('mongoose')


const logSchema = mongoose.Schema({
date: {
        type: Date,
        default: Date.now
      },
  title: {type: String, require: true},
  entry: {type: String, require: true},
  shipIsBroken: {type: Boolean, default:true}
},{ timestamps: true })

const Log = mongoose.model('Log', logSchema)
module.exports = Log