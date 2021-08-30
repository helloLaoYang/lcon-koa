
const mongoose = require('mongoose')
const SessionModle = require('./session.model')
const { print } = require('../utils')

const connection = () => {
  print('开始连接数据库')

  mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'bilibili-live-admin-development'
  })

  const db = mongoose.connection

  db.once('error', () => {
    print('数据库连接失败')
    connection()
  })

  db.once('open', () => {
    print('数据库连接成功')
  })
}

connection()

module.exports = class  MongooseStore {
  async destroy (id) {
    return SessionModle.remove({
      id,
    })
  }
  
  async get (id) {
    const { data, expiresAt } = await SessionModle.findOne({
      id
    })
    return data
  }
  
  async set (id, data, maxAge, { changed, rolling }) {
    if (changed || rolling) {
      await SessionModle.updateOne({
        id,
      }, {
        $set: {
          data,
        }
      }, { upsert: true, safe: true });
    }
    return data
  }

  static create () {
		return new MongooseStore()
	}
  
}
