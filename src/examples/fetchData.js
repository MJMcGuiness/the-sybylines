import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;

const FetchData = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      <h2>site title is : {title}</h2>
    </div>
  );
};

export default FetchData;
