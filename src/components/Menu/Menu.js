import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, View } from 'native-base';
import { setNavOpen } from '~/redux/userInterface';
import { menuItem } from '~/types';
import MenuItem from './Item';
import LineDivider from '~/styled/LineDivider';
import styles from './Menu.styles';

const Menu = ({ items }) => {
  const [openSubitems, setOpenSubitems] = useState();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleItemPress = (item) => {
    if (item.subitems && openSubitems !== item.id) {
      setOpenSubitems(item.id);
    } else {
      const { screen, id } = item.link;
      navigation.push(screen, { id });
      setOpenSubitems(null);
      dispatch(setNavOpen({ open: false }));
    }
  };

  return (
    <Container>
      <Content padder>
        {items.map((item, idx, list) => (
          <React.Fragment key={item.id}>
            <MenuItem
              title={item.title}
              onPress={() => handleItemPress(item)}
              isOpen={openSubitems === item.id}
              hasSubitems={!!item.subitems}
            />
            {item.subitems && openSubitems === item.id && (
              <View style={styles.subitems}>
                {item.subitems.map((subitem, subIdx, subList) => (
                  <React.Fragment key={subitem.id}>
                    <MenuItem
                      title={subitem.title}
                      onPress={() => handleItemPress(subitem)}
                      isSubitem
                    />
                    {subIdx < subList.length - 1 && <LineDivider />}
                  </React.Fragment>
                ))}
              </View>
            )}
            {idx < list.length - 1 && <LineDivider />}
          </React.Fragment>
        ))}
      </Content>
    </Container>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(menuItem).isRequired,
};

export default Menu;
