import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer } from 'native-base';
import { setNavOpen } from '~/redux/userInterface';
import withLoader from '~/components/withLoader';
import { childrenType } from '~/types';
import Menu from './Menu';
import MenuSkeleton from './Skeleton';
import MenuError from './Error';

const MenuWithLoader = withLoader(Menu, MenuSkeleton, MenuError);

const MenuContainer = ({ children }) => {
  const status = useSelector((state) => state.config.status);
  const items = useSelector((state) => state.config.menu.items);
  const navOpen = useSelector((state) => state.userInterface.navOpen);

  const dispatch = useDispatch();
  const drawerRef = useRef();

  const handleClose = () => {
    dispatch(setNavOpen({ open: false }));
  };

  useEffect(() => {
    if (navOpen) {
      // eslint-disable-next-line no-underscore-dangle
      drawerRef.current._root.open();
    } else {
      // eslint-disable-next-line no-underscore-dangle
      drawerRef.current._root.close();
    }
  }, [navOpen]);

  return (
    <Drawer
      ref={drawerRef}
      content={<MenuWithLoader status={status} items={items} />}
      onClose={handleClose}
    >
      {children}
    </Drawer>
  );
};

MenuContainer.propTypes = {
  children: childrenType.isRequired,
};

export default MenuContainer;
