

/**
 * 用户session存储
 */
const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  id: {
    required: true,
    type: String,
  },
  createAt: {
    required: true,
    type: Date,
  },

  data: {
    type: Object,
  }
})

schema.pre('save', function (next) {
  this.createAt = Date.now()

  next()
})
 
module.exports = model('sessions', schema, 'sessions')
 