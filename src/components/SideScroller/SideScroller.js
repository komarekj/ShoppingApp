import React from 'react';
import { ScrollView, View, ViewPropTypes } from 'react-native';
import { childrenType } from '~/types';
import styles from './SideScroller.styles';

const SideScroller = ({ children, innerWrapStyle }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={[styles.itemWrap, innerWrapStyle]}>{children}</View>
    </ScrollView>
  );
};

SideScroller.propTypes = {
  children: childrenType.isRequired,
  innerWrapStyle: ViewPropTypes.style,
};

SideScroller.defaultProps = {
  innerWrapStyle: null,
};

export default SideScroller;
