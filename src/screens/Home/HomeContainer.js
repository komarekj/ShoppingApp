import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';
import HomeSkeleton from './Skeleton';
import HomeError from './Error';
import withLoader from '~/components/withLoader';

const HomeWithLoader = withLoader(Home, HomeSkeleton, HomeError);

const HomeContainer = () => {
  const status = useSelector((state) => state.config.status);
  const sections = useSelector((state) => state.config.homepage.sections);

  return <HomeWithLoader status={status} sections={sections} />;
};

export default HomeContainer;
