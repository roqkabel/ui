import React from 'react';
import { mount } from 'enzyme';

import { ImageBackground } from '../components/ImageBackground';
import { Text } from '../components/Text';

describe('ImageBackground', () => {
  it('renders an ImageBackground', () => {
    const testSource = { uri: 'https://raw.githubusercontent.com/shoutem/shoutem.github.io/master/img/shoutem-developers.png' };
    const demo = mount(<ImageBackground source={testSource} />);
    const instance = demo.instance();
    const instanceUri = instance.props.source.uri;

    expect(instance).toBeInstanceOf(ImageBackground);
    expect(instanceUri).toEqual(testSource.uri)

    demo.unmount();
  });

  it('renders nested children', () => {
    const testSource = { uri: 'https://raw.githubusercontent.com/shoutem/shoutem.github.io/master/img/shoutem-developers.png' };
    const testText = 'Inside an image';
    const demo = mount(
      <ImageBackground source={testSource}>
        <Text>{testText}</Text>
      </ImageBackground>
    );
    const instance = demo.instance();
    const instanceUri = instance.props.source.uri;
    const childInstance = demo.find(Text).instance();
    const childTextString = childInstance.props.children;

    expect(instance).toBeInstanceOf(ImageBackground);
    expect(instanceUri).toEqual(testSource.uri)

    expect(childInstance).toBeInstanceOf(Text);
    expect(childTextString).toEqual(testText);

    demo.unmount();
  });
});
