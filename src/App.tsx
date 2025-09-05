import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@/styles/global.module.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <>
      <ColorSchemeScript forceColorScheme="dark" />
      <MantineProvider theme={theme} forceColorScheme="dark">
        <Notifications />
        <Router />
      </MantineProvider>
    </>
  );
}
