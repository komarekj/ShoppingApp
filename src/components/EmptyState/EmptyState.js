import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, Text } from 'native-base';
import styles from './EmptyState.styles';

const EmptyState = ({ content }) => {
  return (
    <Card testID="emptyState">
      <CardItem style={styles.cardItem}>
        <Text style={styles.content}>{content}</Text>
      </CardItem>
    </Card>
  );
};

EmptyState.propTypes = {
  content: PropTypes.string.isRequired,
};

export default EmptyState;
