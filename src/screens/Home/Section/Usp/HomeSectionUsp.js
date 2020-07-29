import React from 'react';
import { Grid, Col } from 'react-native-easy-grid';
import { Image } from 'react-native';
import { H3, Text } from 'native-base';
import { homeSectionUspType } from '~/types';
import styles from './HomeSectionUsp.styles';

const HomeSectionUsp = ({ settings }) => {
  const { items } = settings;
  return (
    <Grid style={styles.container}>
      {items.map(({ icon, title, content }) => (
        <Col style={styles.item} key={title}>
          <Image source={{ uri: icon }} style={styles.icon} />
          <H3 style={styles.title}>{title}</H3>
          <Text style={styles.content}>{content}</Text>
        </Col>
      ))}
    </Grid>
  );
};

HomeSectionUsp.propTypes = {
  settings: homeSectionUspType.isRequired,
};

export default HomeSectionUsp;
