jest.unmock('../../src/js/components/Footer.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Footer from '../../src/js/components/Footer.jsx';

describe('Footer', () => {
  it('testing', () => {

    const footer = TestUtils.renderIntoDocument(
      <Footer />
    );

    const footerNode = ReactDOM.findDOMNode(footer);

    expect(footerNode.textContent).toEqual("footer");

  });
});
