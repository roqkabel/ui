import React from 'react';
import { mount } from 'enzyme';

import { Title } from '../components/Text';
import { Card } from '../components/Card';

describe('Card', () => {
  it('renders a Card', () => {
    const testStyle = { height: 100, width: 100 };
    const demo = mount(
      <Card style={testStyle} />
    );
    const instance = demo.instance();
    const instanceStyle = instance.props.style;


    expect(instance).toBeInstanceOf(Card);
    expect(instanceStyle.height).toEqual(testStyle.height);
    expect(instanceStyle.width).toEqual(testStyle.width);

    demo.unmount()
  });

  it('renders nested children', () => {
    const testText = 'Inside a Card';
    const demo = mount(
      <Card>
        <Title>{testText}</Title>
      </Card>
    );
    const instance = demo.instance();
    const childInstance = demo.find(Title).instance();
    const childText = childInstance.props.children;

    expect(instance).toBeInstanceOf(Card);
    expect(childInstance).toBeInstanceOf(Title);
    expect(childText).toEqual(testText);

    demo.unmount()
  });
});
