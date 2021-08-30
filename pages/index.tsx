
/**
 * 用户登录页面
 * 
 * @目前登录页就是首页
 * 
 * @author hellolaoyang
 * @date 2021年08月30日14:59:48
 */
 import type { NextPage } from 'next'
 import Head from 'next/head'
 import classNames from 'classnames'
 import Logo from '../components/logo'
 import Doodle from '../components/Doodle'
 import Login from '../components/login'
 import styles from './index.view.module.scss'
 
 const LoginView: NextPage = () => {
   return (
     <>
       <Head>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/css-doodle/0.4.2/css-doodle.min.js"></script>
       </Head>
       <div className={styles.full_w}>
         <div className={ classNames([styles.w_990, styles.header]) }>
           <div className={ styles.logo_con }>
             <Logo className={ styles.logo }></Logo>
             <span>欢迎登录</span>
           </div>
 
           <nav className={styles.menu}>
             <a href="" className={ styles.menu_item }>
               更新记录
             </a>
             <a href="" className={ styles.menu_item }>
               问题反馈
             </a>
             <a href="" className={ styles.menu_item }>
               联系作者
             </a>
           </nav>
         </div>
       </div>
 
       <div className={ classNames([styles.full_w, styles.main]) }>
         <div className={styles.main_bg}>
           <Doodle></Doodle>
         </div>
         <div className={ classNames([styles.w_990, styles.main_con]) }>
           <div className={ styles.login_con }>
             <div className={ styles.notice }>
              目前只能使用哔哩哔哩手机客户端扫码登录
             </div>
             <Login></Login>
           </div>
         </div>
       </div>
     </>
   )
 }
 
 export default LoginView
 