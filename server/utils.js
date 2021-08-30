
/**
 * server utils
 * 
 * @author hellolaoyang
 * 
 * @date 2021年08月25日11:32:49
 * 
 */
require('colors')
const dayjs = require('dayjs')
const consola = require('consola')

/**
 * 打印日志使用
 * @param {}} content 
 * @returns 
 */
exports.print = (content) => {
  if (!content) {
    return
  }
  consola.log(
    dayjs().format('YYYY/MM/DD HH:mm:ss').bgGreen.black
    + ' '
    + content
    + '\n'
  )
}
