import React from "react";
import Layout from "../components/layout";
import MyComponent from "../components/my-component";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const Frame = ({ children }) => {
  return <div style={styles.frame}>{children}</div>;
};

const GalleryPage = () => {
  return (
    <Layout pageTitle="Gallery">
      <Frame>
        <p>This will be passed in as children</p>
      </Frame>
      <MyComponent />
      <div className="row gallery">
        <div className="col-md-6 mb-3">
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            style={styles.image}
            className="image"
          />
        </div>
        <div className="col-md-6  mb-3">
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
            src="../images/clint-patterson.jpg"
            style={styles.image}
            className="image"
          />
        </div>

        <div className="col-md-6 mb-3">
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
            src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            style={styles.image}
            className="image"
          />
        </div>
        <div className="col-md-6  mb-3">
          <StaticImage
            alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
            src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            style={styles.image}
            className="image"
          />
        </div>

        
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="gallery" />;

export default GalleryPage;

const styles = {
  frame: {
    padding: "1rem",
    color: "#fff",
  },
  image: {
    backgroundSize: "cover",
    width: "100%",
    cursor:"pointer",
  },
};

