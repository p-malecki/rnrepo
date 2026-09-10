import { css } from '../../styled-system/css';

// PageSection/TextSection render their `dividerTop`/`dividerBottom` line as a
// regular child, so it lands *inside* the padding box — flush against the
// heading instead of on the section boundary. A real border on the section sits
// outside the padding, which is how the pre-ui-components site drew these.
export const sectionBorderTopCss = css({
  borderTopWidth: 'sm',
  borderTopStyle: 'solid',
  borderTopColor: 'border.default',
});

export const sectionBorderBottomCss = css({
  borderBottomWidth: 'sm',
  borderBottomStyle: 'solid',
  borderBottomColor: 'border.default',
});
