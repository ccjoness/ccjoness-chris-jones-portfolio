;

// components/ParticleBackground.tsx
import { useCallback } from "react";
import type { Container } from "@tsparticles/engine"; // Import type for particles instance
import { Particles } from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


;







export function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Container) => {
    // @ts-ignore
    await loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: '#242424',
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    shape: {
      type: 'star',
    },
    fpsLimit: 60,
    detectRetina: true,
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: ['attract', 'slow'],
        },
        onClick: {
          enable: true,
          mode: 'repulse',
        },
        resize: {
          delay: 0.5,
          enable: true,
        },
      },
      modes: {
        trail: {
          delay: 1,
          quantity: 1,
        },
        attract: {
          distance: 250,
          duration: 0.4,
          easing: 'ease-out-quad',
          factor: 1,
          maxSpeed: 50,
          speed: 2,
        },
        bounce: {
          distance: 200,
        },
        bubble: {
          distance: 400,
          duration: 2,
          mix: false,
          opacity: 0.8,
          size: 40,
          divs: {
            distance: 200,
            duration: 0.4,
          },
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5,
          },
          radius: 60,
        },
        grab: {
          distance: 400,
          links: {
            blink: false,
            consent: false,
            opacity: 1,
          },
        },
        push: {
          default: true,
          quantity: 4,
        },
        remove: {
          quantity: 2,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
          factor: 20,
          speed: 10,
          maxSpeed: 50,
          easing: 'ease-out-quad',
        },
        slow: {
          factor: 10,
          radius: 100,
        },
        particle: {
          replaceCursor: false,
          pauseOnStop: false,
          stopDelay: 0,
        },
        light: {
          area: {
            gradient: {
              start: {
                value: '#ffffff',
              },
              stop: {
                value: '#000000',
              },
            },
            radius: 1000,
          },
          shadow: {
            color: {
              value: '#000000',
            },
            length: 2000,
          },
        },
      },
    },
    particles: {
      bounce: {
        horizontal: {
          value: 1,
        },
        vertical: {
          value: 1,
        },
      },
      collisions: {
        absorb: {
          speed: 2,
        },
        bounce: {
          horizontal: {
            value: 1,
          },
          vertical: {
            value: 1,
          },
        },
        enable: false,
        mode: 'bounce',
        maxSpeed: 50,
        overlap: {
          enable: true,
          retries: 0,
        },
      },
      color: {
        value: ['#2562e6', '#7a0976'],
      },
      effect: {
        close: true,
        fill: true,
      },
      move: {
        enable: true,
        speed: 1,
        path: {
          clamp: true,
          delay: {value:0},
          enable: false,
          options: {},
        },
        random: false,
        straight: false,
        trail: {
          delay: 1,
          quantity: 1,
        },
        vibrate: false,
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
        limit: {
          mode: 'delete',
          value: 0,
        },
        value: 200,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        close: true,
        fill: true,
        type: 'star',
      },
      size: {
        value: {
          min: 1,
          max: 3,
        },
      },
      zIndex: {
        value: -10,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1,
      },
      destroy: {
        mode: 'none',
        split: {
          count: 1,
          factor: {
            value: 3,
          },
          rate: {
            value: {
              min: 4,
              max: 9,
            },
          },
          sizeOffset: true,
        },
      },
      links: {
        blink: false,
        color: "random",
        consent: false,
        distance: 150,
        enable: true,
        frequency: 1,
        opacity: 0.4,
        width: 1,
        warp: false,
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      zLayers: 100,
      key: 'slow',
      name: 'Slow',
      motion: {
        disable: false,
        reduce: {
          factor: 4,
          value: true,
        },
      },
      // number: { value: 400, density: { enable: true, value_area: 1000 } },
      // color: { value: '#ffffff' },
      // shape: { type: 'circle' },
      // opacity: { value: 0.5, random: true },
      // size: { value: 2, random: true },
      // move: { enable: true, speed: 0.1 },
    },
  };

  return <Particles
    id="tsparticles"
    // @ts-ignore
    init={particlesInit}
    // @ts-ignore
    options={options}
  />;
}
