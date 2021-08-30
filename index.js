
const dev = process.env.NODE_ENV !== 'production'
require('dotenv').config()
const { print } = require('./server/utils')
const app = require('next')({ dev })
const server = require('./server')

const handle = app.getRequestHandler()

const {
  SERVER_HOST,
  SERVER_PORT
} = process.env

app.prepare().then(() => {
  server.use(
    async(ctx) => {
      ctx.respond = true
      await handle(ctx.req, ctx.res)
    })
})

server.listen(SERVER_PORT, (err) => {
  if (err) {
    throw err
  }
  print(`服务已经成功启动: http://${ SERVER_HOST }:${ SERVER_PORT }`)
})


module.exports = {
  app,
  server
}
