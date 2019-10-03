import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

import githubCorner from '../../images/github_corner.svg';

const breakpoints = [600, 1400];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const GithubButton = styled.a`
  height: 100%;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  & > img {
    height: 100%;
  }
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: translate(10px, -10px);
    ${mq[0]} {
      transform: translate(20px, -20px);
    }
  }
`;

const Wrapper = styled.header`
  grid-area: header;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  height: 100px;
  ${mq[0]} {
    height: 150px;
  }
  ${mq[1]} {
    height: 200px;
  }
`;

const Header = () => (
  <Wrapper>
    <GithubButton
      target="_blank"
      href="https://github.com/greenberrynl/hacktoberfest2019"
    >
      <img src={githubCorner} alt="Github" />
    </GithubButton>
  </Wrapper>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
