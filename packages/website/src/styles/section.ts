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

export const sectionContentWidthCss = css({ maxWidth: '[60rem]' });

const sectionHeadingSize = {
  fontSize: { base: '[3rem]', md: '[3.75rem]' },
  lineHeight: { base: '[3.5rem]', md: '[4.125rem]' },
} as const;

const sectionDescriptionSize = {
  fontSize: '[1.125rem]',
  lineHeight: '[1.625rem]',
} as const;

export const sectionHeadingCss = css({
  '& h2': sectionHeadingSize,
  '&[data-part="header"] p, & [data-part="description"]': sectionDescriptionSize,
});

export const sectionTitleCss = css(sectionHeadingSize);
