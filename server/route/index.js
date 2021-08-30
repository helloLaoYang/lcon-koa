
const LogModel = require('../mongo/log.model')

module.exports = app => {
  // 用于记录访问时长，暂时没有啥用
  app.use(async (ctx, next) => {
    const { url } = ctx.request
    const start = Date.now()
    await next()
    const duration = Date.now() - start

    const log = new LogModel({
      action: 'SYSTEM',
      duration,
      content: `loaded url: ${ url }`,
      createAt: Date.now(),
    })

    await log.save()
  })
  
  // # 鉴权操作
  app.use(async (ctx, next) => {
    const { url, session } = ctx
    // 对接口进行鉴权
    if (/api/.test(url) && (!session || !session.userId)) {
      ctx.body = {
        errorDetail: null,
        data: null,
        message: '请重新登录',
        code: -200,
      }
      return
    }

    // 管理后台鉴权
    if (/console/.test(url) && (!session || !session.userId)) {
      ctx.redirect('/', next)
      return
    }

    await next()
  })
}