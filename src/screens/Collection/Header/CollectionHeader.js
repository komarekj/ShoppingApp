import React from 'react';
import { H1, Text, View } from 'native-base';
import { collectionType } from '~/types';
import styles from './CollectionHeader.styles';

const CollectionHeader = ({ collection }) => {
  const { title, description } = collection;
  return (
    <View padder style={styles.header}>
      <H1 style={styles.title}>{title}</H1>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

CollectionHeader.propTypes = {
  collection: collectionType.isRequired,
};

export default CollectionHeader;
