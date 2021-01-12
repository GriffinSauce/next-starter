import React from 'react';
import { render } from 'test-utils';
import Logo from './Logo';

it('merges classNames', () => {
  const { container } = render(<Logo className="w-10" />);
  expect(container.querySelector('svg')).toHaveClass('w-10');
});
