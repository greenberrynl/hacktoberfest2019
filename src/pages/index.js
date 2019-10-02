import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage = ({ data: { allPeopleJson } }) => (
  <Layout>
    <SEO title="Home" />
    {allPeopleJson.edges.map(
      ({ node: { name, github, twitter, linkedin } }) => (
        <li key={name}>
          <h3>{name}</h3>
          <span>{github}</span>
          <span>{twitter}</span>
          <span>{linkedin}</span>
        </li>
      )
    )}
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allPeopleJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          github: PropTypes.string.isRequired,
          twitter: PropTypes.string.isRequired,
          linkedin: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;

export const query = graphql`
  query getPeople {
    allPeopleJson {
      edges {
        node {
          name
          github
          twitter
          linkedin
        }
      }
    }
  }
`;
