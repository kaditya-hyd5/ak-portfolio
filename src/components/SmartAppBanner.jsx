import { useEffect, useState } from 'react';

/**
 * SmartAppBanner — placeholder shell only.
 *
 * OS-detection and redirect logic is intentionally NOT implemented in this
 * pass, per project brief Section 5. This component currently renders
 * nothing (returns null) until the detection hook below is filled in.
 *
 * TODO (follow-up step):
 * 1. Detect platform via navigator.userAgent:
 *    - iOS Safari      -> rely on <meta name="apple-itunes-app"> in index.html (no custom banner)
 *    - iOS non-Safari / in-app webviews (LinkedIn, Instagram) -> show custom dismissible banner below
 *    - Android          -> show custom dismissible banner, CTA links to `market://details?id={androidPackageId}`
 *                          with HTTPS Play Store fallback for browsers/webviews that block intents
 *    - Desktop / bot     -> render nothing
 * 2. Respect a dismissed-state flag in localStorage/sessionStorage so the banner
 *    doesn't reappear every page load after the user closes it.
 * 3. Never auto-redirect on load — dismissible banner only (non-negotiable, brief Section 7).
 * 4. Stretch: wire deferred deep linking via Android App Links / iOS Universal
 *    Links so an already-installed app opens directly instead of the store page.
 * 5. Fire a lightweight analytics event (Lambda/Firebase function) on
 *    banner-click -> store-redirect for conversion tracking (brief Section 5).
 */
export default function SmartAppBanner({ androidPackageId, iosAppId }) {
  const [platform, setPlatform] = useState('unknown');

  useEffect(() => {
    // TODO: replace with real navigator.userAgent parsing logic
    setPlatform('unknown');
  }, []);

  if (platform === 'unknown') {
    return null;
  }

  // TODO: replace with real dismissible banner markup once detection logic lands
  return (
    <div className="smart-app-banner" role="complementary" aria-label="App install banner">
      <p>Get the app.</p>
      <style>{`
        .smart-app-banner {
          background-color: var(--color-anchor);
          color: #FFFFFF;
          padding: var(--space-xs) var(--space-sm);
          border-radius: var(--radius-base);
        }
      `}</style>
    </div>
  );
}