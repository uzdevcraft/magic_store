import { AppRoot } from "@telegram-apps/telegram-ui";
import { useLaunchParams, useSignal, miniApp } from "@tma.js/sdk-react";

import Test from "./Test/Test";

export function App() {
  // TODO: Most useful for user data
  const lp = useLaunchParams();

  // TODO: Most useful for dark/light mode
  const isDark = useSignal(miniApp.isDark);

  return (
    <AppRoot
      appearance={isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.tgWebAppPlatform) ? "ios" : "base"}
    >
      <Test />
    </AppRoot>
  );
}
