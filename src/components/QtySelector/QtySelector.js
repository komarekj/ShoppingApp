import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Text, Input } from 'native-base';
import styles from './QtySelector.styles';

const QtySelector = ({ qty, onQtyChange }) => {
  const handleQtyChange = (increase) => {
    const newQty = increase ? qty + 1 : qty - 1;
    onQtyChange(Math.max(newQty, 1));
  };

  return (
    <Card style={styles.container}>
      <Button
        onPress={() => handleQtyChange(false)}
        style={styles.selectorItem}
        testID="minusBtn"
      >
        <Text>-</Text>
      </Button>
      <Input
        value={`${qty}`}
        style={[styles.selectorItem, styles.field]}
        editable={false}
        testID="qtyField"
      />
      <Button
        onPress={() => handleQtyChange(true)}
        style={styles.selectorItem}
        testID="plusBtn"
      >
        <Text>+</Text>
      </Button>
    </Card>
  );
};

QtySelector.propTypes = {
  qty: PropTypes.number.isRequired,
  onQtyChange: PropTypes.func.isRequired,
};

export default QtySelector;
