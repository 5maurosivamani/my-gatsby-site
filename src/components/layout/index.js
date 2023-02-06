import React,{ useRef} from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as styles from "./layout.module.css";
import Div100vh from "react-div-100vh";



const Layout = ({ pageTitle, children }) => {


  const headerRef = useRef(null)

  window.onscroll = function () {
    myFunction();
  };
  
  function myFunction() {

    const stickyPosition = headerRef.current.offsetTop

 
    if (window.pageYOffset > stickyPosition) {
      headerRef.current.classList.add("sticky");
    } else {
      headerRef.current.classList.remove("sticky");
    }
  }

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
    <Div100vh>
      <div className={styles.layout}>
        <div className={"px-5 py-4 " + styles.layoutTitle } id="layoutTitle">
          <h1 className="text-light">{data.site.siteMetadata.title}</h1>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList} id="myHeader" ref={headerRef}>
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
          <div className="container">
            <h1 className="mb-2">{pageTitle}</h1>
            <hr className="mb-5" />

            {children}
          </div>
        </main>

        <footer className={styles.footer}>
          <p> copyright@2023 all rights reserved</p>
        </footer>
      </div>
    </Div100vh>
  );
};

export default Layout;
