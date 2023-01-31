import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from "./layout.module.css"

console.log(styles);

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
        </ul>
      </nav>
      <main className={styles.mainContent}>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer className={styles.footer}>
       <p> copyright@2023 all rights reserved</p>
      </footer>
    </div>
  )
}

export default Layout