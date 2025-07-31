tsParticles.load("tsparticles", {
      fullScreen: { enable: false },
      background: { color: "transparent" },
      particles: {
        number: { value: 40 },
        color: { value: "#60A5FA" }, // azul claro
        shape: { type: "circle" },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 4,
          random: true,
          anim: { enable: true, speed: 4, size_min: 0.5, sync: false }
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          outModes: { default: "bounce" }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100 },
          push: { quantity: 4 }
        }
      }
    });