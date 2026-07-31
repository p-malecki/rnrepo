import {
  AdBanner,
  NavLogo,
  Navbar as UiNavbar,
} from "@swmansion/ui-components";
import type { NavMenuItemConfig } from "@swmansion/ui-components";
import rnrepoLogo from "../../assets/images/rnrepo-logo.svg";
import type { AdBannerConfig } from "../../data/topbar-zone-config";

const menuItems: NavMenuItemConfig[] = [
  { label: "Setup", href: "/#setup" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Supported Libraries", href: "/supported-libraries" },
];

interface HeaderProps {
  showBanner?: boolean;
  adBanner?: AdBannerConfig;
}

export default function Header({
  showBanner = false,
  adBanner,
}: HeaderProps) {
  const navbar = (
    <UiNavbar
      sticky
      className="site-navbar"
      logo={<NavLogo href="/" src={rnrepoLogo.src} alt="RNRepo" height="28px" />}
      menuItems={menuItems}
      githubHref="https://github.com/software-mansion/rnrepo"
      githubLabel="View on GitHub"
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
