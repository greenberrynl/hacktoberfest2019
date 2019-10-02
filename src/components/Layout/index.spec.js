import React from 'react';
import renderer from 'react-test-renderer';

import Layout from './index';

describe('components/Layout', () => {
  it('should render', () => {
    const component = renderer.create(
      <Layout>
        <h1>Hello layout</h1>
      </Layout>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
