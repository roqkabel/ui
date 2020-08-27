import React, { PureComponent } from 'react';

import { Image } from '../../components/Image';

export default class ImageTestComponent extends PureComponent {
  render() {
    const source = { uri: 'https://raw.githubusercontent.com/shoutem/shoutem.github.io/master/img/shoutem-developers.png' };

    return (
      <Image source={source} />
    );
  }
}
