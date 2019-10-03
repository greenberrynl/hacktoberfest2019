import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

import greenberryLogo from '../../images/greenberry_logo.svg';
import hacktoberfestLogo from '../../images/hacktoberfest2019_logo.svg';

const breakpoints = [600, 1400];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const HacktoberButton = styled.a`
  height: 100%;
  display: flex;
  justify-self: end;
  align-items: center;
  & > img {
    height: 100%;
    max-height: 100%;
  }
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: scale(1.04, 1.04);
  }
`;

const GreenberryButton = styled.a`
  height: 100%;
  display: flex;
  justify-self: start;
  align-items: center;
  & > img {
    height: 80%;
    max-height: 100%;
  }
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: scale(1.04, 1.04);
  }
`;

const Wrapper = styled.footer`
  position: relative;
  height: 150px;
  width: 100%;
  grid-area: footer;

  display: grid;
  grid-template-columns: repeat(2, auto);

  padding: 20px;
  ${mq[0]} {
    padding: 20px 70px;
  }
  ${mq[1]} {
    height: 200px;
    padding: 20px 140px;
  }
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
