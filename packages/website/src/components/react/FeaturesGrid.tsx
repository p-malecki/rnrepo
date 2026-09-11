import { Container, PageSection, Reveal, SectionHeader } from '@swmansion/ui-components';
import { Folder, Package, Phone, Shield, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { css, cx } from '../../../styled-system/css';
import { REVEAL_TRAIL_MS, revealCss } from '../../styles/reveal';
import { sectionBorderTopCss, sectionHeadingCss } from '../../styles/section';

interface Feature {
  icon: LucideIcon;
  color: string;
  title: string;
  description: ReactNode;
}

const features: Feature[] = [
  {
    icon: Zap,
    color: '#FF6259',
    title: '2x Faster Builds',
    description:
      'Skip compiling native code from source. RNRepo provides pre-built artifacts that dramatically reduce your build times.',
  },
  {
    icon: Phone,
    color: '#FFD61E',
    title: 'Simplified Brownfield Projects',
    description:
      'No more managing complex React Native dependency lists. Just reference the prebuilt artifacts and focus on your app.',
  },
  {
    icon: Folder,
    color: '#38ACDD',
    title: 'Reduced Disk Space',
    description: (
      <>
        Built directories are smaller because they don't need to contain intermediate build
        artifacts. Save your <code>node_modules</code> from gigabytes of compiler generated files.
      </>
    ),
  },
  {
    icon: Package,
    color: '#87CCE8',
    title: 'Optimized Release Builds',
    description:
      "Our published artifacts are release builds, better optimized than the debug builds you'd typically compile from source.",
  },
  {
    icon: Shield,
    color: '#57B495',
    title: 'Security First',
    description:
      'Isolated GitHub workflows, transparent builds, traceable artifacts, and GPG signing ensure your builds are secure and tamper-proof.',
  },
];

// The library Grid only breaks at one breakpoint (base -> md); this section
// steps 1 -> 2 -> 3 columns, so the template is spelled out here instead.
const GRID_COLUMNS = 3;

const gridCss = css({
  display: 'grid',
  gap: '6',
  marginTop: '16',
  gridTemplateColumns: {
    base: '[repeat(1, minmax(0, 1fr))]',
    md: '[repeat(2, minmax(0, 1fr))]',
    lg: '[repeat(3, minmax(0, 1fr))]',
  },
});

const cardRevealCss = css({ height: 'full' });

const cardCss = css({
  height: 'full',
  padding: '8',
  backgroundColor: '[rgba(23, 23, 23, 0.4)]',
  borderWidth: 'sm',
  borderStyle: 'solid',
  borderColor: 'border.default',
  transitionProperty: '[border-color]',
  transitionDuration: 'normal',
  transitionTimingFunction: 'standard',
  _hover: {
    borderColor: 'border.strong',
    '& [data-feature-icon]': { backgroundColor: '[rgba(250, 250, 250, 0.1)]' },
  },
});

const iconWrapperCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '12',
  height: '12',
  marginBottom: '6',
  borderRadius: 'lg',
  backgroundColor: '[rgba(250, 250, 250, 0.05)]',
  transitionProperty: '[background-color]',
  transitionDuration: 'normal',
  transitionTimingFunction: 'standard',
});

const titleCss = css({
  fontSize: 'xl',
  fontWeight: 'semibold',
  color: 'text.default',
  marginBottom: '3',
});

const descriptionCss = css({
  fontSize: 'sm',
  lineHeight: 'relaxed',
  color: 'text.muted',
  '& code': {
    paddingInline: '1.5',
    paddingBlock: '0.5',
    borderRadius: 'sm',
    backgroundColor: 'gray.900',
    color: 'text.default',
    fontFamily: 'code',
    fontSize: 'sm',
  },
});

export default function FeaturesGrid() {
  return (
    <PageSection id="benefits" size="lg" tone="default" className={sectionBorderTopCss}>
      <Container size="default">
        <Reveal className={revealCss}>
          <SectionHeader
            className={sectionHeadingCss}
            title="Why RNRepo?"
            description="Built for React Native developers who value speed, security, and simplicity."
          />
        </Reveal>
        <div className={gridCss}>
          {features.map(({ icon: Icon, color, title, description }, index) => (
            <Reveal
              key={title}
              className={cx(cardRevealCss, revealCss)}
              delay={REVEAL_TRAIL_MS * (1 + Math.floor(index / GRID_COLUMNS))}
            >
              <div className={cardCss}>
                <div data-feature-icon className={iconWrapperCss}>
                  <Icon size={24} color={color} aria-hidden />
                </div>
                <h3 className={titleCss}>{title}</h3>
                <p className={descriptionCss}>{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </PageSection>
  );
}
