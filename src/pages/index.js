import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const ImageContainer = styled.div`
  max-width: 200px;
  margin-bottom: 25px;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ImageContainer>
        <Image />
      </ImageContainer>
    </Layout>
  );
};
export default IndexPage;
