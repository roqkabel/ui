import React from 'react';
import { mount } from 'enzyme';

import { Divider } from '../components/Divider';
import { Caption } from '../components/Text';

describe('Divider', () => {
  it('renders an Divider', () => {
    const demo = mount(<Divider />);
    const instance = demo.instance();

    expect(instance).toBeInstanceOf(Divider);

    demo.unmount();
  });

  it('renders nested children', () => {
    const testStyleName = 'section-header';
    const testCaption = 'Section header text';
    const demo = mount(
      <Divider styleName="section-header">
        <Caption>{testCaption}</Caption>
      </Divider>
    );
    const instance = demo.instance();
    const instanceStyleName = instance.props.styleName;
    const childInstance = demo.find(Caption).instance();
    const childInstanceString = childInstance.props.children;

    expect(instance).toBeInstanceOf(Divider);
    expect(instanceStyleName).toEqual(testStyleName);

    expect(childInstance).toBeInstanceOf(Caption);
    expect(childInstanceString).toEqual(testCaption);

    demo.unmount();
  });
});
