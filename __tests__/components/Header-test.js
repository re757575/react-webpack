jest.unmock('../../src/js/components/Header.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Header from '../../src/js/components/Header.jsx';

describe('Header', () => {
  it('testing', () => {

    function changeTitle(title) {
      console.log(title);
    }

    const header = TestUtils.renderIntoDocument(
      <Header changeHeaderTitle={changeTitle.bind(this)} headerTitle="test" />
    );

    const headerNode = ReactDOM.findDOMNode(header);


    const input = headerNode.querySelector('input');

    input.value = 10;

    TestUtils.Simulate.change(input);

    expect(input.value).toEqual("test");

  });

});
