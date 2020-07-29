import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, H3 } from 'native-base';
import { ProductGridSlider } from '~/components/ProductGrid';
import screens from '~/constants/screens';
import { homeSectionProductsType } from '~/types';
import styles from './HomeSectionProducts.styles';

const HomeSectionProducts = ({ settings }) => {
  const { title, products } = settings;
  const navigation = useNavigation();

  const handleProductPress = (productId) => {
    navigation.push(screens.Product, { id: productId });
  };

  return (
    <View style={styles.section}>
      <H3 style={styles.title}>{title}</H3>
      <ProductGridSlider
        products={products}
        wrapStyle={styles.innerWrap}
        onProductPress={handleProductPress}
      />
    </View>
  );
};

HomeSectionProducts.propTypes = {
  settings: homeSectionProductsType.isRequired,
};

export default HomeSectionProducts;
