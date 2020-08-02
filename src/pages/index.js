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
      <h2>We want to show you real tech spaces</h2>
      <p>
        It's nice to have your own private space. It's a fact that people are
        living an important amount of time working and having fun on a desk with
        computers, videogames, drawing, painting, reading, or even watching
        movies.
      </p>
      <p>
        In order to be confortable, it's necesary to have everything right in
        it's place, and that doesn't mean to have our desk clean and ready to
        "take the perfect shot". At the end, we use our tables as what the was
        meant to be: tables.
      </p>
    </Layout>
  );
};
export default IndexPage;
