import React from 'react'
import styles from "./Navbar.module.css"
import Link from 'next/link'
import Links from './Links/Links'



const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}

export default Navbar
