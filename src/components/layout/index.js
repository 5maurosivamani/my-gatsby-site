import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "./layout.module.css";

console.log(styles);

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={styles.layout}>
      <div className={"px-5 py-4 "+ styles.layoutTitle}><h1 className="text-light">{data.site.siteMetadata.title}</h1></div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
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
  );
};

export default Layout;
