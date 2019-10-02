import React from 'react';
import renderer from 'react-test-renderer';

import SEO from './index';

describe('components/SEO', () => {
  it('should render', () => {
    const component = renderer.create(
      <SEO title="home" description="this is description" />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
