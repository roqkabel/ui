import React from 'react';
import { Image } from 'react-native';
import { mount } from 'enzyme';

import { ImageGalleryOverlay } from '../components/ImageGalleryOverlay';
import { Caption, Subtitle } from '../components/Text';

describe('ImageGalleryOverlay', () => {
  it('renders an ImageGalleryOverlay', () => {
    const demo = mount(<ImageGalleryOverlay />);
    const instance = demo.instance();

    expect(instance).toBeInstanceOf(ImageGalleryOverlay);

    demo.unmount();
  });

  it('renders a description and title', () => {
    const testDescription = 'This is a string that is longer than the default limit of 90'
      + 'characters, we\'re using a string this long to determine how it behaves.';
    const testTitle = 'Title in ImageGalleryOverlay';
    const demo = mount(
      <ImageGalleryOverlay
        description={testDescription}
        title={testTitle}
      />
    );
    const instance = demo.instance();
    const instanceTitleProp = instance.props.title;
    const subtitleInstance = demo.find(Subtitle).instance();
    const subtitleString = subtitleInstance.props.children;
    const captionInstance = demo.find(Caption).instance();
    const captionString = captionInstance.props.children;
    const instanceDescriptionProp = instance.props.description;

    expect(instance).toBeInstanceOf(ImageGalleryOverlay);
    expect(instanceTitleProp).toEqual(testTitle);
    expect(instanceDescriptionProp).toEqual(testDescription);

    expect(subtitleInstance).toBeInstanceOf(Subtitle);
    expect(subtitleString).toEqual(testTitle);

    expect(captionInstance).toBeInstanceOf(Caption);
    expect(captionString).toEqual(testDescription);

    demo.unmount();
  });
});
