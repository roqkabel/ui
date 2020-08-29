import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { mount } from 'enzyme';

import { ImagePreview } from '../components/ImagePreview';

describe('ImagePreview', () => {
  it('renders an ImagePreview', () => {
    const demo = mount(<ImagePreview />);
    const instance = demo.instance();

    expect(instance).toBeInstanceOf(ImagePreview);

    demo.unmount();
  });

  it('renders an Image', () => {
    const testSource = { uri: 'https://raw.githubusercontent.com/shoutem/shoutem.github.io/master/img/shoutem-developers.png' };
    const demo = mount(<ImagePreview source={testSource} />);
    const instance = demo.instance();
    const instanceUri = instance.props.source.uri;
    const imageInstance = demo.find(Image).instance();

    expect(instance).toBeInstanceOf(ImagePreview);
    expect(instanceUri).toEqual(testSource.uri);
    expect(imageInstance).toBeInstanceOf(Image);

    demo.unmount();
  });
});
