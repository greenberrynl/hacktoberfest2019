import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './index';

describe('components/Footer', () => {
  it('should render', () => {
    const component = renderer.create(<Footer />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
