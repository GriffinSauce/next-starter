import React from 'react';
import { render, act } from 'test-utils';
import { axe } from 'jest-axe';
import Navigation from './Navigation';

it('passes accessibility tests', async () => {
  const { container } = render(<Navigation />);

  // TODO: act() is needed here to prevent test log noise
  // https://github.com/nickcolley/jest-axe/issues/95
  let results;
  await act(async () => {
    results = await axe(container);
  });

  expect(results).toHaveNoViolations();
});
