import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function AnimatedBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true },

        background: {
          color: "transparent"
        },

        particles: {
          number: {
            value: 60
          },

          color: {
            value: "#38bdf8"
          },

          size: {
            value: { min: 1, max: 3 }
          },

          opacity: {
            value: 0.3
          },

          move: {
            enable: true,
            speed: 0.5
          },

          links: {
            enable: true,
            distance: 120,
            color: "#38bdf8",
            opacity: 0.2,
            width: 1
          }
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            }
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.5
              }
            }
          }
        }
      }}
    />
  );
}
