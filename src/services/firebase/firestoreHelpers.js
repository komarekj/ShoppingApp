import _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export const getData = (item) => {
  const values = _.mapValues(item.data(), (value) => {
    if (value && typeof value === 'object' && 'toMillis' in value) {
      return value.toMillis();
    }
    return value;
  });

  return {
    ...values,
    id: item.id,
  };
};
