import React from 'react';
import LoadingStatus from '~/constants/LoadingStatus';

const withLoader = (Content, Skeleton, ErrorScreen) => ({
  status,
  ...otherProps
}) => {
  switch (status) {
    case LoadingStatus.FINISHED:
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Content {...otherProps} />;
    case LoadingStatus.ERROR:
      return <ErrorScreen />;
    default:
      return <Skeleton />;
  }
};

export default withLoader;
