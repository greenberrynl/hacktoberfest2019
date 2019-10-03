import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubAlt,
  faTwitter,
  faLinkedinIn,
  faReddit
} from '@fortawesome/free-brands-svg-icons';

const breakpoints = [900, 1200];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

const Wrapper = styled.section`
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: 1fr;
  margin: 100px auto;
  ${mq[0]} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mq[1]} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1.25rem;
  grid-template-columns: 80px 1fr;
  width: 100%;
  background-color: #1d2c4e;
  padding: 1.25rem;
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    transform: scale(1.04, 1.04);
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
`;

const Content = styled.div`
  margin: 1.25rem 0 0;
`;

const Link = styled.a`
  display: block;
`;

const UserIcon = styled.img`
  display: block;
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

const ImageContainer = styled.div`
  max-width: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  font-size: 14px;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const Grid = ({ data }) => (
  <Wrapper>
    {data.map(({ node: { name, github, twitter, linkedin, reddit } }) => (
      <Card key={name}>
        <ImageContainer>
          <UserIcon
            src={`https://github.com/${github.replace('@', '')}.png?size=200`}
          />
        </ImageContainer>
        <ContentContainer>
          <Title>
            <h3>{name}</h3>
          </Title>
          <Content>
            <Link
              href={`https://github.com/${github.replace('@', '')}`}
              target="_blank"
            >
              <Icon icon={faGithubAlt} />
              {github}
            </Link>
            {twitter && twitter !== 'N/A' && (
              <Link
                href={`https://twitter.com/${twitter.replace('@', '')}`}
                target="_blank"
              >
                <Icon icon={faTwitter} />
                {twitter}
              </Link>
            )}
            {linkedin && linkedin !== 'N/A' && (
              <Link href={linkedin} target="_blank">
                <Icon icon={faLinkedinIn} />
                LinkedIn
              </Link>
            )}
            {reddit && reddit !== 'N/A' && (
              <Link href={`https://reddit.com/user/${reddit.replace('@', '')}`} target="_blank">
                <Icon icon={faReddit} />
                Reddit
              </Link>
            )}

          </Content>
        </ContentContainer>
      </Card>
    ))}
  </Wrapper>
);

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

Grid.defaultProps = {};

export default Grid;
