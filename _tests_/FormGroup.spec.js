import React from 'react';
import { mount } from 'enzyme';

import { FormGroup } from '../components/FormGroup';
import { Caption } from '../components/Text';
import { TextInput } from '../components/TextInput';

describe('FormGroup', () => {
  it('renders a FormGroup', () => {
    const demo = mount(<FormGroup />);
    const instance = demo.instance();

    expect(instance).toBeInstanceOf(FormGroup);

    demo.unmount();
  });

  it('renders nested children', () => {
    const formGroupStyleNameTest = 'stretch';
    const captionTextTest = 'Login';
    const textInputPlaceholderTest = 'Username or Email';
    const demo = mount(
      <FormGroup styleName={formGroupStyleNameTest}>
        <Caption>{captionTextTest}</Caption>
        <TextInput placeholder={textInputPlaceholderTest} />
      </FormGroup>
    );
    const instance = demo.instance();
    const instanceStyleName = instance.props.styleName;
    const captionInstance = demo.find(Caption).instance();
    const captionString = captionInstance.props.children;
    const textInputInstance = demo.find(TextInput).instance();
    const textInputPlaceholder = textInputInstance.props.placeholder;

    expect(instance).toBeInstanceOf(FormGroup);
    expect(instanceStyleName).toEqual(formGroupStyleNameTest);

    expect(captionInstance).toBeInstanceOf(Caption);
    expect(captionString).toEqual(captionTextTest);

    expect(textInputInstance).toBeInstanceOf(TextInput);
    expect(textInputPlaceholder).toEqual(textInputPlaceholderTest);

    demo.unmount();
  });
});
