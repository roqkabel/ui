import React from 'react';
import { mount } from 'enzyme';

import { Title } from '../components/Text';
import { View } from '../components/View';

describe('View', () => {
  it('renders a view', () => {
    const testStyle = { height: 100, width: 100 };
    const demo = mount(
      <View style={testStyle} />
    );
    const instance = demo.instance();
    const instanceStyle = instance.props.style;

    expect(instance).toBeInstanceOf(View);
    expect(instanceStyle.height).toEqual(testStyle.height);
    expect(instanceStyle.width).toEqual(testStyle.width);

    demo.unmount()
  });

  it('renders nested children', () => {
    const testText = 'Inside a view';
    const demo = mount(
      <View>
        <Title>{testText}</Title>
      </View>
    );
    const instance = demo.instance();
    const childInstance = demo.find(Title).instance();
    const childText = childInstance.props.children;

    expect(instance).toBeInstanceOf(View);

    expect(childInstance).toBeInstanceOf(Title);
    expect(childText).toEqual(testText);

    demo.unmount()
  });
});
