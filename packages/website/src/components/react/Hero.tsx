import { Button, Grid, HeroSection, Text } from '@swmansion/ui-components';
import { Code2, Package, Shield, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { css } from '../../../styled-system/css';
import { ctaButtonCss } from '../../styles/button';

interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

const stats: Stat[] = [
  { value: 'Up to 2x', label: 'Faster Builds', icon: Zap, color: '#FF6259' },
  { value: '100%', label: 'Open Source', icon: Code2, color: '#FFD61E' },
  { value: 'GPG', label: 'Signed Artifacts', icon: Shield, color: '#38ACDD' },
  {
    value: 'Minimal',
    label: 'Setup Required',
    icon: Package,
    color: '#57B495',
  },
];

// `isolation` is load-bearing: it makes the section a stacking context, so the
// negative-z pseudo-elements paint over the section's own background instead of
// escaping behind it. ::before is the SWM pattern, ::after the top fade.
const heroCss = css({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '0',
    zIndex: '[-2]',
    backgroundImage: '[url(/swm-pattern.png)]',
    backgroundSize: '[cover]',
    backgroundPosition: '[center]',
    pointerEvents: 'none',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    height: '32',
    zIndex: '[-1]',
    backgroundImage: '[linear-gradient(to bottom, token(colors.bg.canvas), transparent)]',
    pointerEvents: 'none',
  },
});

const heroContentCss = css({
  paddingTop: { base: '20', lg: '28', xl: 'section.lg' },
});

const accentCss = css({ color: 'brand.primary' });

const descriptionCss = css({ maxWidth: '[48rem]' });

// The library ArrowIcon is a drawn SVG; the original hero used a plain "→"
// glyph dimmed against each button's own background.
const arrowOnPrimaryCss = css({ color: '[rgba(0, 0, 0, 0.6)]' });
const arrowOnSecondaryCss = css({ color: 'text.muted' });

// Inline, not a Panda class: the Button recipe's own `borderWidth: 0` is
// emitted later in the stylesheet at equal specificity, so a class here loses.
const secondaryButtonBorder = { border: '1px solid #525252' };

const statsGridCss = css({
  width: 'full',
  maxWidth: '[64rem]',
  marginTop: '12',
});

const statCardCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6',
  backgroundColor: '[rgba(23, 23, 23, 0.5)]',
  borderWidth: 'sm',
  borderStyle: 'solid',
  borderColor: 'border.default',
  backdropFilter: '[blur(4px)]',
  transitionProperty: '[border-color]',
  transitionDuration: 'normal',
  transitionTimingFunction: 'standard',
  _hover: {
    borderColor: 'border.strong',
    '& [data-stat-icon]': { transform: '[scale(1.1)]' },
  },
});

const statIconBallCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '10',
  height: '10',
  marginBottom: '3',
  borderRadius: 'full',
  backgroundColor: '[rgba(250, 250, 250, 0.05)]',
  transitionProperty: '[transform]',
  transitionDuration: 'normal',
  transitionTimingFunction: 'standard',
});

const statValueCss = css({
  fontSize: '2xl',
  fontWeight: 'bold',
  color: 'text.default',
  marginBottom: '1',
});

const statLabelCss = css({
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'gray.500',
  textTransform: 'uppercase',
  letterSpacing: '[0.025em]',
});

export default function HomeHero() {
  return (
    <HeroSection
      tone="default"
      containerSize="wide"
      className={heroCss}
      slotProps={{ content: { className: heroContentCss } }}
    >
      <HeroSection.CreatorBadge />
      <HeroSection.Title>
        A Repository for React Native <span className={accentCss}>Pre-Built Artifacts</span>
      </HeroSection.Title>
      <Text size="lg" color="muted" align="center" className={descriptionCss}>
        Speed up your builds and avoid compiling native libraries from scratch. RNRepo delivers
        pre-built artifacts so you can focus on building your app.
      </Text>
      <HeroSection.Actions>
        <Button variant="primary" size="lg" className={ctaButtonCss} href="/#setup">
          Get Started <span className={arrowOnPrimaryCss}>→</span>
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className={ctaButtonCss}
          style={secondaryButtonBorder}
          href="https://github.com/software-mansion/rnrepo"
          external
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub <span className={arrowOnSecondaryCss}>→</span>
        </Button>
      </HeroSection.Actions>
      <Grid columns="4" columnsMobile="2" gap="4" className={statsGridCss} alignItems="stretch">
        {stats.map(({ value, label, icon: Icon, color }) => (
          <div key={label} className={statCardCss}>
            <div data-stat-icon className={statIconBallCss}>
              <Icon size={24} color={color} aria-hidden />
            </div>
            <div className={statValueCss}>{value}</div>
            <div className={statLabelCss}>{label}</div>
          </div>
        ))}
      </Grid>
    </HeroSection>
  );
}
