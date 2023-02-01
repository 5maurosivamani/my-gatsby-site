import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ title }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }
  `);

  return (
    <>
      <title>{title || data.site.siteMetadata.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}

export default Seo;
