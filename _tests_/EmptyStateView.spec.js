import React from 'react';
import { mount } from 'enzyme';

import { Button } from '../components/Button';
import { EmptyStateView } from '../components/EmptyStateView';
import { Subtitle, Text } from '../components/Text';

describe('EmptyStateView', () => {
  it('renders an EmptyStateView', () => {
    const demo = mount(<EmptyStateView />);
    const instance = demo.instance();

    expect(instance).toBeInstanceOf(EmptyStateView);

    demo.unmount();
  });

  it('renders a Button when onRetry prop is provided with text from retryButtonTitle prop', () => {
    const onRetry = () => {};
    const retryButtonTextTest = 'Retry';
    const demo = mount(
      <EmptyStateView
        onRetry={onRetry}
        retryButtonTitle={retryButtonTextTest}
      />
    );
    const instance = demo.instance();
    const buttonInstance = demo.find(Button).instance();
    const textInstance = demo.find(Text).instance();
    const buttonTextString = textInstance.props.children;

    expect(instance).toBeInstanceOf(EmptyStateView);

    expect(buttonInstance).toBeInstanceOf(Button);

    expect(textInstance).toBeInstanceOf(Text);
    expect(buttonTextString).toEqual(retryButtonTextTest);

    demo.unmount();
  });

  it('renders a Subtitle when message prop is provided', () => {
    const messageTest = 'Test message';
    const demo = mount(<EmptyStateView message={messageTest} />);
    const instance = demo.instance();
    const subtitleInstance = demo.find(Subtitle).instance();
    const subtitleString = subtitleInstance.props.children;

    expect(instance).toBeInstanceOf(EmptyStateView);

    expect(subtitleInstance).toBeInstanceOf(Subtitle);
    expect(subtitleString).toEqual(messageTest);

    demo.unmount();
  });
});
