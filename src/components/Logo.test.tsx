import React from 'react';
import { render } from 'test-utils';
import { axe } from 'jest-axe';
import Logo from './Logo';

it('merges classNames', () => {
  const { container } = render(<Logo className="w-10" />);
  expect(container.querySelector('svg')).toHaveClass('w-10');
});

it('passes accessibility tests', async () => {
  const { container } = render(<Logo />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
