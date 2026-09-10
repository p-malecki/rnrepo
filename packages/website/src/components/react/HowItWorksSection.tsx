import {
  Card,
  Container,
  Heading,
  PageSection,
  Text,
  TimelineSection,
} from '@swmansion/ui-components';
import type { ReactNode } from 'react';
import { css, cx } from '../../../styled-system/css';
import { sectionBorderTopCss } from '../../styles/section';

// Matches the hero/feature perk cards: square corners, translucent surface, and
// a border that lifts on hover along with the icon tile behind it. The icon
// glyphs themselves come from the `.hiw-step--*` rules in global.css.
const timelineCardCss = css({
  borderRadius: '[0]',
  backgroundColor: '[rgba(23, 23, 23, 0.4)]',
  borderColor: 'border.default',
  transitionProperty: '[border-color]',
  transitionDuration: 'normal',
  transitionTimingFunction: 'standard',
  '& [data-part="step-badge"]': {
    backgroundColor: '[rgba(250, 250, 250, 0.05)]',
    transitionProperty: '[background-color]',
    transitionDuration: 'normal',
    transitionTimingFunction: 'standard',
  },
  _hover: {
    borderColor: 'border.strong',
    '& [data-part="step-badge"]': {
      backgroundColor: '[rgba(250, 250, 250, 0.1)]',
    },
  },
});

// The timeline and the verification card are two sections but read as one
// block, so the card carries the closing gap. It's a margin, not padding:
// `paddingBlock` is zeroed on that section and the two would fight as longhands.
const verifyCardSectionCss = css({
  marginBottom: { base: '12', lg: '16' },
});

const verifyCardCss = css({ borderRadius: '[0]' });

interface Step {
  /** Suffix of the `.hiw-step--*` class that supplies this item's icon. */
  icon: string;
  title: string;
  body: ReactNode;
}

const steps: Step[] = [
  {
    icon: 'library',
    title: 'Library Configuration',
    body: (
      <>
        Our GitHub repository maintains a curated list of React Native libraries in{' '}
        <code>libraries.json</code> and supported versions in{' '}
        <code>react-native-versions.json</code>.
      </>
    ),
  },
  {
    icon: 'detection',
    title: 'Automated Detection',
    body: 'A cron job continuously monitors for new library releases and React Native versions, scheduling builds automatically.',
  },
  {
    icon: 'builds',
    title: 'Isolated Builds',
    body: 'Each library is built against specific React Native versions in isolated GitHub workflow — fully transparent and traceable.',
  },
  {
    icon: 'publishing',
    title: 'Maven Publishing',
    body: 'Built artifacts are GPG-signed and published to our public Maven repository.',
  },
  {
    icon: 'fetching',
    title: 'Client Fetching',
    body: 'When you build your app, the RNRepo plugin fetches pre-built artifacts instead of compiling from source.',
  },
];

export default function HowItWorksSection() {
  return (
    <>
      <TimelineSection
        id="how-it-works"
        layout="vertical"
        verticalVariant="single-column"
        size="lg"
        containerSize="content"
        markerColor="#38ACDD"
        className={sectionBorderTopCss}
      >
        <TimelineSection.Header
          title="How It Works"
          description="A fully automated, transparent pipeline from source to prebuilt artifacts."
        />
        {steps.map(({ icon, title, body }, index) => (
          <TimelineSection.Item
            key={title}
            step={String(index + 1)}
            title={title}
            className={cx(timelineCardCss, 'hiw-step', `hiw-step--${icon}`)}
          >
            {body}
          </TimelineSection.Item>
        ))}
      </TimelineSection>
      <PageSection size="sm" paddingBlock={{ base: '0', lg: '0' }} className={verifyCardSectionCss}>
        <Container size="content">
          <Card variant="outline" size="lg" className={verifyCardCss}>
            <Card.Body
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: '1 1 20rem' }}>
                <Heading as="h3" size="h4">
                  Transparent &amp; Verifiable
                </Heading>
                <Text size="md" color="muted" style={{ marginTop: '0.75rem' }}>
                  Every artifact includes a link to its build workflow. You can verify the exact
                  commit, build logs, and GPG signature of any prebuilt library.
                </Text>
                <Text size="md" color="muted" style={{ marginTop: '0.75rem' }}>
                  No hidden steps, no black boxes.
                </Text>
              </div>
              <div
                aria-hidden
                style={{
                  width: '7rem',
                  height: '7rem',
                  borderRadius: '9999px',
                  border: '8px solid #57B495',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#57B495',
                  flexShrink: 0,
                  marginInline: 'auto',
                }}
              >
                {/* Inline rather than the library CheckIcon: the old site drew
                    this at stroke-width 4 to balance the 8px ring. */}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </PageSection>
    </>
  );
}
