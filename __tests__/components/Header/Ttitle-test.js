jest.unmock('../../../src/js/components/Header/Title.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Title from '../../../src/js/components/Header/Title.jsx';

describe('Header/Title', () => {
  it('testing', () => {
    // Render a title with label in the document
    const title = TestUtils.renderIntoDocument(
      <Title title="It's a testing" />
    );

    const titleNode = ReactDOM.findDOMNode(title);

    expect(TestUtils.isCompositeComponent(title)).toBeTruthy();

    expect(titleNode.textContent).toEqual("It's a testing");

  });
});
