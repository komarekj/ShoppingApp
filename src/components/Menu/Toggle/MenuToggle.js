import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'native-base';
import { Feather } from '@expo/vector-icons';
import colors from '~/themes/colors';
import { setNavOpen } from '~/redux/userInterface';
import styles from './MenuToggle.styles';

const MenuToggle = () => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(setNavOpen({ open: true }));
  };

  return (
    <Button transparent onPress={handlePress} style={styles.button}>
      <Feather name="menu" color={colors.primaryContrast} size={24} />
    </Button>
  );
};

export default MenuToggle;
