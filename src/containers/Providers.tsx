import { AppRoot } from '@telegram-apps/telegram-ui';
import { useSignal, miniApp, useLaunchParams } from '@tma.js/sdk-react';
import { ErrorBoundary, ErrorBoundaryError } from '@/components/ErrorBoundary';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  // TODO: Most useful for user data
  const lp = useLaunchParams();

  // TODO: Most useful for dark/light mode
  const isDark = useSignal(miniApp.isDark);

  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <AppRoot
        appearance={isDark ? 'dark' : 'light'}
        platform={['macos', 'ios'].includes(lp.tgWebAppPlatform) ? 'ios' : 'base'}
      >
        {children}
      </AppRoot>
    </ErrorBoundary>
  );
};

export default Providers;
