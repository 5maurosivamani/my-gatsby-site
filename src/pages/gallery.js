import React from "react";
import Layout from "../components/layout";
import MyComponent from "../components/my-component";
import { StaticImage } from "gatsby-plugin-image";

const Frame = ({ children }) => {
  return <div style={styles.frame}>{children}</div>;
};

const GalleryPage = () => {
  return (
    <Layout>
      <Frame>
        <p>This will be passed in as children</p>
      </Frame>
      <MyComponent />
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        style={styles.image}
      />
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clint-patterson.jpg"
        style={styles.image}
      />
    </Layout>
  );
};

export const Head = () => <title>Gallery</title>;

export default GalleryPage;

const styles = {
  frame: {
    padding: "1rem",
    color: "#fff",
  },
  image:{
    width:"50%",
    backgroundSize:"cover",

  }
};
