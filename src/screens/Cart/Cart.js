import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, Content } from 'native-base';
import EmptyState from '~/components/EmptyState';
import screens from '~/constants/screens';
import { removeFromCart } from '~/redux/cart';
import { cartProductItemType } from '~/types';
import CartCheckoutButton from './CheckoutButton';
import CartContent from './Content';
import CartTotal from './Total';
import styles from './Cart.styles';

const Cart = ({ productItems, total }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleCheckoutPress = () => {
    navigation.navigate(screens.Checkout);
  };

  const handleItemPress = (productId) => {
    navigation.navigate(screens.Shop, {
      screen: screens.Product,
      params: { id: productId },
    });
  };

  const handleItemRemovePress = (productId) => {
    dispatch(removeFromCart({ productId }));
  };

  if (!productItems.length) {
    return (
      <Container>
        <Content padder>
          <EmptyState content="No Products In Your Cart" />
        </Content>
      </Container>
    );
  }

  return (
    <Content padder>
      <CartContent
        productItems={productItems}
        onItemPress={handleItemPress}
        onItemRemovePress={handleItemRemovePress}
      />
      <CartTotal total={total} />
      <CartCheckoutButton
        style={styles.bottomButton}
        onPress={handleCheckoutPress}
      />
    </Content>
  );
};

Cart.propTypes = {
  productItems: PropTypes.arrayOf(cartProductItemType).isRequired,
  total: PropTypes.string.isRequired,
};

export default Cart;
