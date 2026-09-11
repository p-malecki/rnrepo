import {
  Card,
  Container,
  Heading,
  PageSection,
  Reveal,
  Text,
  TimelineSection,
} from '@swmansion/ui-components';
import type { ReactNode } from 'react';
import { css, cx } from '../../../styled-system/css';
import { REVEAL_TRAIL_MS, revealCss } from '../../styles/reveal';
import { sectionBorderTopCss, sectionHeadingCss } from '../../styles/section';

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

const timelineSectionCss = css({
  paddingBottom: { base: '8!', lg: '10!' },
});

const verifyCardSectionCss = css({
  marginBottom: { base: '12', lg: '16' },
});

const verifyCardCss = css({ borderRadius: '[0]' });

interface Step {
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
      <Reveal className={revealCss}>
        <TimelineSection
          id="how-it-works"
          layout="vertical"
          verticalVariant="single-column"
          size="lg"
          containerSize="content"
          markerColor="#38ACDD"
          className={cx(sectionBorderTopCss, timelineSectionCss)}
        >
          <TimelineSection.Header
            className={sectionHeadingCss}
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
      </Reveal>
      <Reveal className={revealCss} delay={REVEAL_TRAIL_MS}>
        <PageSection
          size="sm"
          paddingBlock={{ base: '0', lg: '0' }}
          className={verifyCardSectionCss}
        >
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
      </Reveal>
    </>
  );
}
