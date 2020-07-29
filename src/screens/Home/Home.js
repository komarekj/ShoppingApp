import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import { homeSectionType } from '~/types';
import HomeSection from './Section';

const Home = ({ sections }) => {
  return (
    <Container>
      <Content padder>
        {sections.map(({ id, category, settings }) => (
          <HomeSection
            key={id}
            sectionCategory={category}
            settings={settings}
          />
        ))}
      </Content>
    </Container>
  );
};

Home.propTypes = {
  sections: PropTypes.arrayOf(homeSectionType).isRequired,
};

export default Home;
