import type { AdZone } from '@swmansion/ui-components';

export interface AdBannerConfig {
  zones: AdZone[];
  rotateIntervalMs?: number;
}

export const AD_BANNER: AdBannerConfig = {
  rotateIntervalMs: 4000,
  zones: [
    {
      zoneId: 'rnrepo-topbar-1',
      contentId: 'ea15c4216158c4097b65fe6504a4b3b7',
      fallbackBgColor: '#36acdd',
    },
    {
      zoneId: 'rnrepo-topbar-2',
      contentId: 'ea15c4216158c4097b65fe6504a4b3b7',
      fallbackBgColor: '#36acdd',
    },
    {
      zoneId: 'rnrepo-topbar-3',
      contentId: 'ea15c4216158c4097b65fe6504a4b3b7',
      fallbackBgColor: '#36acdd',
    },
  ],
};
