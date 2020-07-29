import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseApp } from '~/services/firebase';
import { fetchConfig } from '~/redux/config';
import { setAuthState } from '~/redux/account';

const AppContainer = ({ children }) => {
  const configStatus = useSelector((state) => state.config.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!configStatus) {
      dispatch(fetchConfig());
    }
  }, []);

  useEffect(() => {
    const unsubscribe = firebaseApp.auth().onAuthStateChanged((user) => {
      dispatch(setAuthState({ isAuth: !!user, initialized: true }));
    });

    return unsubscribe;
  }, [dispatch]);

  return children;
};

export default AppContainer;
