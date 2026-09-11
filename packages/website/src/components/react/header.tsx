import { AdBanner, Button, NavLogo, Navbar as UiNavbar } from '@swmansion/ui-components';
import type { NavMenuItemConfig } from '@swmansion/ui-components';
import { css } from '../../../styled-system/css';
import rnrepoLogo from '../../assets/images/rnrepo-logo.svg';
import type { AdBannerConfig } from '../../data/topbar-zone-config';

const GITHUB_HREF = 'https://github.com/software-mansion/rnrepo';

const menuItems: NavMenuItemConfig[] = [
  { label: 'Setup', href: '/#setup' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Supported Libraries', href: '/supported-libraries' },
];

const githubButtonCss = css({
  fontSize: 'xs',
  letterSpacing: '[0.025em]',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
});

const githubButtonBorder = { border: '1px solid #525252' };

const arrowCss = css({ color: 'text.muted' });

const githubIconCss = css({ display: { base: 'inline-flex', lg: 'none' } });
const githubLabelCss = css({ display: { base: 'none', lg: 'inline' } });

function GithubMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const githubButton = (
  <Button
    variant="secondary"
    size="sm"
    className={githubButtonCss}
    style={githubButtonBorder}
    href={GITHUB_HREF}
    external
    aria-label="View RNRepo on GitHub"
    title="View RNRepo on GitHub"
  >
    <GithubMark className={githubIconCss} />
    <span className={githubLabelCss}>View on GitHub</span>
    <span className={`${githubLabelCss} ${arrowCss}`} aria-hidden>
      →
    </span>
  </Button>
);

const githubDrawerButton = (
  <Button
    variant="secondary"
    size="sm"
    className={githubButtonCss}
    style={githubButtonBorder}
    href={GITHUB_HREF}
    external
    fullWidth
  >
    View on GitHub <span className={arrowCss}>→</span>
  </Button>
);

interface HeaderProps {
  showBanner?: boolean;
  adBanner?: AdBannerConfig;
}

export default function Header({ showBanner = false, adBanner }: HeaderProps) {
  const navbar = (
    <UiNavbar
      sticky
      className="site-navbar"
      logo={<NavLogo href="/" src={rnrepoLogo.src} alt="RNRepo" height="28px" />}
      menuItems={menuItems}
      menuAlign="end"
      ctaButton={githubButton}
      mobileActions={githubDrawerButton}
    />
  );

  if (!showBanner || !adBanner) return navbar;

  return (
    <>
      <AdBanner
        zones={adBanner.zones}
        {...(adBanner.rotateIntervalMs !== undefined && {
          rotateIntervalMs: adBanner.rotateIntervalMs,
        })}
      />
      {navbar}
    </>
  );
}
