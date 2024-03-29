//modules are components of a program with one or more functions or values.

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
// export modules so that you can use them in other parts of your application.
module.exports = Log