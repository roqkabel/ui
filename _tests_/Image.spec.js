import React from 'react';
import { mount } from 'enzyme';

import ImageTestComponent from './mocks/ImageTestComponent';

describe('Image', () => {
  it('renders an image', () => {
    const demo = mount(<ImageTestComponent />);
    const instance = demo.instance();

    expect(instance).toBeInstanceOf(ImageTestComponent);
  });
});
