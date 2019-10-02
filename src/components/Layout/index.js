import React from 'react';
import { injectGlobal } from 'emotion';
import PropTypes from 'prop-types';
import { pathOr } from 'ramda';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Quicksand', sans-serif;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header
        siteTitle={pathOr('No title', ['site', 'siteMetadata', 'title'], data)}
      />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <hr />
          <h3>This is footer</h3>
          <a href="https://www.greenberry.nl">Greenberry</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
