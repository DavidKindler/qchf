import React from 'react';
import App from '../src/components/App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});
