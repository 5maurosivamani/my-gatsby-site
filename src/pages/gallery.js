import React from "react";
import Layout from "../components/layout";
import MyComponent from "../components/my-component";

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
    </Layout>
  );
};

export const Head = () => <title>Gallery</title>;

export default GalleryPage;

const styles = {
  frame: {
    padding: "1rem",
    color:"#fff"
  },
};
