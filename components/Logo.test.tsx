import React from 'react';
import { render } from '../test/test-utils';
import Logo from './Logo';

it('Merges classNames', async () => {
  const { container } = render(<Logo className="w-10" />);
  expect(container.querySelector('svg')).toHaveClass('w-10');
});
