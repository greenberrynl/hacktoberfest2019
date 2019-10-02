import React from 'react';
import { injectGlobal } from 'emotion';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { pathOr } from 'ramda';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import Footer from '../Footer';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body, p, ol, ul, li, dl, dt, dd, blockquote, figure, fieldset, legend, textarea, pre, iframe, hr, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  html {
    background-color: #152347;
    font-size: 16px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
  }

  body {
    font-family: "Space Mono", monospace;
    color: #99a1b3;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  a {
    color: #92eaff;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    &:hover {
      color: #ff00aa;
    }
  }
`;

const Content = styled.main`
  grid-area: main;
  padding: 0 135px;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 0 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
