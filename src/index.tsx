// Include Telegram UI styles first to allow our code override the package CSS.
import '@telegram-apps/telegram-ui/dist/styles.css';
import '@/styles/global.scss';

import App from '@/App.tsx';
import ReactDOM from 'react-dom/client';

import { init } from '@/init.ts';
import { StrictMode } from 'react';
import { EnvUnsupported } from '@/containers';
import { retrieveLaunchParams } from '@tma.js/sdk-react';

// Mock the environment in case, we are outside Telegram.
import './mockEnv.ts';

const root = ReactDOM.createRoot(document.getElementById('root')!);

try {
  const launchParams = retrieveLaunchParams();
  const { tgWebAppPlatform: platform } = launchParams;
  const debug = (launchParams.tgWebAppStartParam || '').includes('debug') || import.meta.env.DEV;

  // Configure all application dependencies.
  await init({
    debug,
    eruda: debug && ['ios', 'android'].includes(platform),
    mockForMacOS: platform === 'macos'
  }).then(() => {
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
} catch (e) {
  root.render(<EnvUnsupported />);
}
