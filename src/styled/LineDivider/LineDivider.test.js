import React from 'react';
import { render } from 'react-native-testing-library';
import LineDivider from './LineDivider';

describe('LineDivider styled component', () => {
  test('should render', async () => {
    render(<LineDivider />);
  });
});
