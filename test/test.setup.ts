import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';

// TODO: remove this when issue is fixed
// jsdom doesn't support the second param and adds test log noise
// https://github.com/nickcolley/jest-axe/issues/147
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
