import { css } from '../../styled-system/css';

// The library's `size="lg"` button pads 16px top and bottom; RNRepo's CTAs sit
// at 12px. `!important` is required: Panda orders atomic utilities by value, so
// `.py_4` is always emitted after `.py_3` and would win regardless of which
// class the element lists last.
export const ctaButtonCss = css({ paddingBlock: '3!' });
