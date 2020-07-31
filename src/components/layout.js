import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(250, 250, 246);
    color: #363b46;
    margin: 0;
    padding: 0;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Container = styled.section`
    background: white;
    border-radius: 5px;
    border: 1px solid #f0f0ea;
    margin: 100px auto;
    max-width: 500px;
    padding: 2rem 2rem;

    @media (max-width: 600px) {
      margin: 0.5rem;
      padding: 1rem;
    }
  `

  const Footer = styled.footer`
    font-size: 13px;
    font-family: sans-serif;
    a {
      color: initial;
      text-decoration-color: #ff872b;
    }
  `

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> from the green & gray
          city of{" "}
          <a
            href="https://en.wikipedia.org/wiki/Torrelavega"
            rel="noreferrer"
            target="_blank"
          >
            Torrelavega
          </a>
        </Footer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
