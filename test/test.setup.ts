import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';

// JSDom doesn't support the second param and adds test log noise
// TODO: clean up when fixed: https://github.com/nickcolley/jest-axe/issues/147
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

// Prevent act() error logs
// TODO: clean up when fixed: https://github.com/vercel/next.js/pull/20169
jest.mock(
  'next/link',
  () =>
    ({ children }) =>
      children,
);

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
