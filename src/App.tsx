import './index.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ParticleBackground } from '@/components/ParticlesBackground/ParticlesBackground';
import { Router } from './Router';
import { theme } from './theme';


export default function App() {
  return (
    <>
      <ColorSchemeScript forceColorScheme="dark" />
      <MantineProvider theme={theme} forceColorScheme="dark">
        <ParticleBackground />
        <Notifications />
        <Router />
      </MantineProvider>
    </>
  );
}
