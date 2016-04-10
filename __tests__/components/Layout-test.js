jest.unmock('../../src/js/components/Layout.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Layout from '../../src/js/components/Layout.jsx';

describe('Layout', () => {
  it('testing', () => {

    const layout = TestUtils.renderIntoDocument(
      <Layout />
    );

    const layoutNode = ReactDOM.findDOMNode(layout);

    // expect(titleNode.textContent).toEqual("layout");

  });
});
