import React from 'react';
import { mount } from 'enzyme';

import { Image } from '../components/Image';

describe('Image', () => {
  it('renders an image', () => {
    const testSource = { uri: 'https://raw.githubusercontent.com/shoutem/shoutem.github.io/master/img/shoutem-developers.png' };
    const demo = mount(<Image source={testSource} />);
    const instance = demo.instance();
    const instanceUri = instance.props.source.uri;

    expect(instance).toBeInstanceOf(Image);
    expect(instanceUri).toEqual(testSource.uri)
  });
});
