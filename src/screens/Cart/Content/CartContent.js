import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, View, H3, Text, Button } from 'native-base';
import { Feather } from '@expo/vector-icons';
import LineDivider from '~/styled/LineDivider';
import colors from '~/themes/colors';
import styles from './CartContent.styles';
import { cartProductItemType } from '~/types';

const CartContent = ({ productItems, onItemPress, onItemRemovePress }) => {
  return (
    <Card>
      {productItems.map(({ qty, product }, idx, list) => (
        <React.Fragment key={product.id}>
          <CardItem style={styles.itemContainer} testID="productItem">
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.itemContentWrap}>
              <Text style={styles.qty}>{qty}x</Text>
              <TouchableOpacity
                style={styles.titleWrap}
                onPress={() => onItemPress(product.id)}
              >
                <H3 style={styles.title} testID="productTitle">
                  {product.title}
                </H3>
              </TouchableOpacity>
              <Text style={styles.price}>${product.price}</Text>
            </View>
            <Button
              transparent
              style={styles.removeButton}
              onPress={() => onItemRemovePress(product.id)}
              testID="removeButton"
            >
              <Feather name="x" size={16} color={colors.subtle} />
            </Button>
          </CardItem>
          {idx < list.length - 1 && <LineDivider />}
        </React.Fragment>
      ))}
    </Card>
  );
};

CartContent.propTypes = {
  productItems: PropTypes.arrayOf(cartProductItemType).isRequired,
  onItemPress: PropTypes.func.isRequired,
  onItemRemovePress: PropTypes.func.isRequired,
};

export default CartContent;
