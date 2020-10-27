export const jspConfig1 = {
  // background: {
  //   color: {
  //     value: "#0d47a1",
  //   },
  // },
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "grab",
      },
      onHover: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 50,
        duration: 0.6,
      },
    },
  },
  particles: {
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 40,
        sync: true
      }
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "random",
      enable: true,
      outMode: "out",
      random: true,
      speed: 2,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        value_area: 1000,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 7,
    },
  },
  detectRetina: true,
};
export const jspConfig2 = {
  // background: {
  //   color: {
  //     value: "#000000",
  //   },
  // },
  detectRetina: true,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onclick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        mode: "trail",
        enable: true,
      }
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.2,
      },
      trail: {
        delay: 0.08,
        quantity: 1.5,
        particles: {
          color: {
            value: "#ff0000",
            animation: {
              enable: true,
              speed: 150,
              sync: true
            }
          },
          collisions: {
            enable: true
          },
          links: {
            enable: true
          },
          move: {
            outMode: "out",
            speed: 1
          },
          size: {
            value: 5,
            animation: {
              enable: true,
              speed: 4,
              minimumValue: 1,
              sync: true,
              startValue: "min",
              destroy: "max"
            }
          }
        }
      },
      push: {
        particles_nb: 34,
      },
      remove: {
        particles_nb: 20,
        duration: 0.2,
        distance: 10,
      },

    },
    resize: true
  },
  particles: {
    color: {
      color: "random",
      animation: {
        enable: true,
        sync: false,
        speed: 50
      },
      value: "#f00"
    },
    links: {
      color: "random",
      distance: 150,
      enable: true,
      opacity: 1,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "random",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true
      }
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.3,
        speed: 0.5
      },
      value: 0.8,
      random: {
        enable: true,
        minimumValue: 0.3
      }
    },
    size: {
      animation: {
        enable: true,
        minimumValue: 1,
        speed: 3
      },
      value: 3,
      random: {
        enable: true,
        minimumValue: 1
      }
    }
  }
};