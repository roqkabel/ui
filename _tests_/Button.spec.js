import React from 'react';
import { mount } from 'enzyme';

import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { Text } from '../components/Text';

describe('Button', () => {
  it('renders a Button', () => {
    const demo = mount(<Button />);
    const instance = demo.instance();

    expect(instance).toBeInstanceOf(Button);

    demo.unmount()
  });

  it('renders nested children', () => {
    const testText = 'Press me';
    const testIconName = 'Facebook';
    const demo = mount(
      <Button>
        <Icon name={testIconName} />
        <Text>{testText}</Text>
      </Button>
    );
    const instance = demo.instance();
    const textChildInstance = demo.find(Text).instance();
    const childText = textChildInstance.props.children;
    const childIconInstance = demo.find(Icon).instance();
    const childIconName = childIconInstance.props.name;

    expect(instance).toBeInstanceOf(Button);
    expect(textChildInstance).toBeInstanceOf(Text);
    expect(childText).toEqual(testText);
    expect(childIconInstance).toBeInstanceOf(Icon);
    expect(childIconName).toEqual(testIconName);

    demo.unmount()
  });
});
