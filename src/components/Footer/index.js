import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

import greenberryLogo from '../../images/greenberry_logo.svg';
import hacktoberfestLogo from '../../images/hacktoberfest_logo.svg';

const HacktoberButton = styled.a`
  height: 100%;
  display: block;
  justify-self: end;
  & > img {
    height: 100%;
    width: 100%;
  }
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: scale(1.04, 1.04);
  }
`;

const GreenberryButton = styled.a`
  height: 100%;
  display: block;
  justify-self: start;
  & > img {
    height: 100%;
    width: 100%;
  }
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: scale(1.04, 1.04);
  }
`;

const Wrapper = styled.footer`
  position: relative;
  height: 200px;
  width: 100%;
  grid-area: footer;

  display: grid;
  grid-template-columns: repeat(2, 50%);

  padding: 0 135px;
`;

const Footer = () => (
  <Wrapper>
    <GreenberryButton target="_blank" href="https://www.greenberry.nl/">
      <img src={greenberryLogo} alt="Greenberry" />
    </GreenberryButton>
    <HacktoberButton
      target="_blank"
      href="https://hacktoberfest.digitalocean.com/"
    >
      <img src={hacktoberfestLogo} alt="Hacktoberfest 2019" />
    </HacktoberButton>
  </Wrapper>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
