import React from 'react';
import renderer from 'react-test-renderer';

import Grid from './index';

describe('components/Grid', () => {
  it('should render', () => {
    const testData = [
      {
        node: {
          github: '@the-mo',
          linkedin: 'https: //www.linkedin.com/in/mohammedf',
          name: 'Mohammed Fahsi',
          twitter: '@followmohammed',
        },
      },
    ];

    const component = renderer.create(<Grid data={testData} />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
