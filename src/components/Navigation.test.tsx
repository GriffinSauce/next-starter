import React from 'react';
import { render } from 'test-utils';
import { axe } from 'jest-axe';
import Navigation from './Navigation';

it('passes accessibility tests', async () => {
  const { container } = render(<Navigation />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
