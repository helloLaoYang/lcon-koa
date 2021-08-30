
const Koa = require('koa')
const koaSession = require('koa-session')
const bodyParser = require('koa-bodyparser');
const SessionStore = require('./mongo')

const app = new Koa()

app.use(
  bodyParser()
)

app.use(
  koaSession({
    keys: 'live-admin-koa-session-key',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    overwrite: true,
    signed: true,
    store: new SessionStore(),
  }, app)
)

require('./route')(app)

module.exports = app
