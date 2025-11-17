import React from 'react'
import Buttton from '../Button/Button'
import Styles from './Header.module.css'
function Header() {
  return (
    <div className={Styles.headerCss}>Header
        <button className={Styles.btnCss}>Click Me</button>
    </div>
  )
}

export default Header