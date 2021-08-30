
/**
 * logo component
 */
import React from 'react'
import classNames from 'classnames'
import styles from './login.module.scss'

export interface LoginProps {
  className?: string
}

const Logo = (props: LoginProps) => {
  const { className } = props
  return (
    <div className={ classNames([styles.login, className]) }>
      LCon
    </div>
  )
}

export default Logo
