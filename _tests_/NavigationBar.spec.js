import React from 'react';
import { mount } from 'enzyme';

import { NavigationBar } from '../components/NavigationBar/NavigationBar';
import { Button } from '../components/Button';
import { Subtitle, Text, Title } from '../components/Text';

describe('NavigationBar', () => {
  it('renders a NavigationBar', () => {
    const demo = mount(<NavigationBar />);
    const instance = demo.instance();

    expect(instance).toBeInstanceOf(NavigationBar);

    demo.unmount()
  });

  it('renders leftComponent, title / centerComponent and rightComponent', () => {
    const buttonTestText = 'Press me';
    const subtitleTestText = 'Left';
    const titleTestText = 'Title';

    const demo = mount(
      <NavigationBar
        leftComponent={(<Subtitle>{subtitleTestText}</Subtitle>)}
        title={titleTestText}
        rightComponent={(
          <Button>
            <Text>{buttonTestText}</Text>
          </Button>
        )}
      />
    );
    const instance = demo.instance();
    const instanceTitleProp = instance.props.title;
    const titleComponentInstance = demo.find(Title).instance();
    const titleComponentString = titleComponentInstance.props.children;
    const subtitleComponentInstance = demo.find(Subtitle).instance();
    const subtitleString = subtitleComponentInstance.props.children;
    const buttonComponentInstance = demo.find(Button).instance();
    const textComponentInstance = demo.find(Text).instance();
    const textString = textComponentInstance.props.children;

    expect(instance).toBeInstanceOf(NavigationBar);
    expect(instanceTitleProp).toEqual(titleTestText);

    expect(subtitleComponentInstance).toBeInstanceOf(Subtitle);
    expect(subtitleString).toEqual(subtitleTestText);

    expect(titleComponentInstance).toBeInstanceOf(Title);
    expect(titleComponentString).toEqual(titleTestText);

    expect(buttonComponentInstance).toBeInstanceOf(Button);

    expect(textComponentInstance).toBeInstanceOf(Text);
    expect(textString).toEqual(buttonTestText);


    demo.unmount()
  });
});
