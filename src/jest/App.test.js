import React from 'react';
import renderer from 'react-test-renderer';
import App from '../pages/App.js';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <App />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  if (tree.props.onMouseEnter) {
    tree.props.onMouseEnter();
  }
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  if (tree.props.onMouseLeave) {
    tree.props.onMouseLeave();
  }
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});