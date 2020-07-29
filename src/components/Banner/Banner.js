import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Card, CardItem } from 'native-base';
import styles from './Banner.styles';

const Banner = ({ image, onPress, aspectRatio, showPressEffect }) => {
  return (
    <Card>
      <CardItem
        cardBody
        button
        activeOpacity={showPressEffect ? 0.8 : 1}
        onPress={onPress}
      >
        <Image
          source={{ uri: image }}
          style={[styles.image, { aspectRatio }]}
          testID="bannerImage"
        />
      </CardItem>
    </Card>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  aspectRatio: PropTypes.number,
  showPressEffect: PropTypes.bool,
};

Banner.defaultProps = {
  aspectRatio: 1,
  showPressEffect: true,
};

export default Banner;
