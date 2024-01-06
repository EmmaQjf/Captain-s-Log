const mongoose = require('mongoose')


const foodLogSchema = mongoose.Schema({
date: {
        type: Date,
        default: Date.now
      },
  title: {type: String, require: true},
  entry: {type: String, require: true},
  foodIsFrozen: {type: Boolean, default:true}
},{ timestamps: true })

const FoodLog = mongoose.model('FoodLog', foodLogSchema)
// export modules so that you can use them in other parts of your application.
module.exports = FoodLog