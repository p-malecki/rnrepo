import { Button, FooterSection } from "@swmansion/ui-components";
import type { FooterLegalLink } from "@swmansion/ui-components";
import { ctaButtonCss } from "../../styles/button";

const footerNavLinks: FooterLegalLink[] = [
  { href: "/#setup", label: "Setup" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/supported-libraries", label: "Supported Libraries" },
];

export default function Footer() {
  return (
    <FooterSection tone="subtle">
      <FooterSection.Content>
        <FooterSection.Title>We are Software Mansion</FooterSection.Title>
        <FooterSection.Description>
          <p>
            We're a software company built around improving developer experience
            and bringing to life the innovative ideas of our clients.
          </p>
          <p>Do you have a software project that we can help you with?</p>
        </FooterSection.Description>
        <FooterSection.Action>
          <Button
            variant="primary"
            size="lg"
            className={ctaButtonCss}
            href="https://swmansion.com/contact"
            external
            target="_blank"
            rel="noopener noreferrer"
            withArrow
          >
            Learn more about us
          </Button>
        </FooterSection.Action>
      </FooterSection.Content>
      <FooterSection.BrandStrip theme="dark" />
      <FooterSection.BottomBar legalLinks={footerNavLinks} />
    </FooterSection>
  );
}
