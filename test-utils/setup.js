import 'react-native';
import 'jest-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'https://localhost' });
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

// removing react-native caused warnings while we wait for react-native enzyme adapter
// https://github.com/enzymejs/enzyme/issues/831#issuecomment-490644160
const originalConsoleError = console.error;
console.error = (message) => {
  if (
    message.includes('Unknown event handler property')
    || message.includes('is using incorrect casing')
    || message.includes('React does not recognize')
    || message.includes('for a non-boolean attribute')
    || message.includes('is unrecognized in this browser')
  ) {
    return;
  }

  originalConsoleError(message);
};

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

Enzyme.configure({ adapter: new Adapter() });
