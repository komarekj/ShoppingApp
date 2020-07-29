import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardItem, View, Text } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { uspItemType } from '~/types';
import LineDivider from '~/styled/LineDivider';
import styles from './Usp.styles';

const Usp = ({ items }) => {
  return (
    <Card>
      {items.map(({ title, content, icon }, idx, list) => (
        <React.Fragment key={title}>
          <CardItem>
            <View style={styles.itemContainer}>
              <Feather name={icon} size={25} style={styles.icon} />
              <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{content}</Text>
              </View>
            </View>
          </CardItem>
          {idx < list.length - 1 && <LineDivider />}
        </React.Fragment>
      ))}
    </Card>
  );
};

Usp.propTypes = {
  items: PropTypes.arrayOf(uspItemType).isRequired,
};

export default Usp;
