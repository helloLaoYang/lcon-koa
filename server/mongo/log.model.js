
/**
 * 记录日志文件存储
 * 
 * node服务日志
 * 接口请求日志
 * 页面请求日志
 */
const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  createAt: {
    type: Date,
    required: true,
  },

  creatorId: {
    type: Types.ObjectId,
  },

  action: {
    type: String,
    enum: ['SYSTEM', 'API', 'VIEW']
  },

  duration: {
    type: Number,
  },

  content: {
    type: String,
  }
})

schema.pre('save', function (next) {
  if (!this.createAt) {
    this.createAt = Date.now()
  }
  next()
})

module.exports = model('logs', schema, 'logs')
