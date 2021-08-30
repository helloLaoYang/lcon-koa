
/**
 * 登录框
 */
import { useState, useEffect, useCallback } from 'react'
import classNames from 'classnames'
import QRCode from 'qrcode'
import styles from './login.module.scss'

export interface LoginProps {
  qrcode: string
}

const Login = (props: LoginProps) => {
  const { qrcode } = props

  const [src, setSrc] = useState('')
  const [isEnter, setEnter] = useState(false)
  

  // 进行初始化二维码
  useEffect(() => {
    QRCode.toDataURL('https://www.npmjs.com/package/qrcode').then((url: string) => {
      setSrc(url)
    })
  }, [qrcode])


  const hoverHandler = useCallback(()=> {
    setEnter(true)
  }, [])

  const leaveHandler = useCallback(()=> {
    setEnter(false)
  }, [])

  return (
    <>
      <div className={ styles.tab }>
        <div className={ classNames(styles.tab_item, styles.tab_item_active) }>
          扫码登录
        </div>
        <div className={ classNames(styles.tab_item) }>
          账号登录
        </div>
      </div>

      <div
        className={ styles.qrcode }
        onMouseLeave={leaveHandler}
        onMouseEnter={hoverHandler}
      >
          <div className={styles.qrcode_image}
            style={{
              backgroundImage: `url(${ src })`
            }}
          />
          <div className={styles.qrcode_enter}></div>
      </div>
    </>
    
  )
}

export default Login
