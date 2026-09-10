import { Button, Text, TextSection } from '@swmansion/ui-components';
import { FileText, Lock, Server } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { css, cx } from '../../../styled-system/css';
import { ctaButtonCss } from '../../styles/button';
import { sectionBorderBottomCss, sectionBorderTopCss } from '../../styles/section';

interface Chip {
  icon: LucideIcon;
  color: string;
  label: string;
}

const chips: Chip[] = [
  { icon: Server, color: '#FFD61E', label: 'Self-hosted Maven' },
  { icon: Lock, color: '#57B495', label: 'Private Repository Access' },
  { icon: FileText, color: '#FF6259', label: 'Custom Configurations' },
];

const chipCss = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '2',
  paddingInline: '4',
  paddingBlock: '2',
  fontSize: 'sm',
  color: 'gray.800',
});

const ctaCss = cx(css({ alignSelf: 'center' }), ctaButtonCss);

const footnoteLinkCss = css({ color: 'brand.primary' });

export default function CustomSetupSection() {
  return (
    <TextSection
      size="lg"
      tone="default"
      className={cx(sectionBorderTopCss, sectionBorderBottomCss)}
      eyebrow="Enterprise & Brownfield"
      title="Need a Custom Setup?"
      description="For enterprise and brownfield projects that require self-hosted Maven repositories, private access configuration, or custom library builds—we're here to help."
      action={
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
          >
            {chips.map(({ icon: Icon, color, label }) => (
              <span key={label} className={chipCss}>
                <Icon size={20} color={color} aria-hidden />
                {label}
              </span>
            ))}
          </div>
          <Button
            variant="primary"
            size="lg"
            className={ctaCss}
            href="https://swmansion.com/contact"
            external
            target="_blank"
            rel="noopener noreferrer"
            withArrow
          >
            Contact Software Mansion
          </Button>
          <Text size="sm" color="muted">
            RNRepo is built and maintained by{' '}
            <a
              href="https://swmansion.com"
              target="_blank"
              rel="noopener noreferrer"
              className={footnoteLinkCss}
            >
              Software Mansion
            </a>
          </Text>
        </div>
      }
    />
  );
}
