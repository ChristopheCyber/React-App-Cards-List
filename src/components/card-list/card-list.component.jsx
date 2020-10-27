import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component.jsx';
//TypeScript tsParticles API :
import Particles from "react-tsparticles";

export const CardList = (prop1) => (
    <div className={'card-list-divStyle ' + prop1.cardsPropImg + '-list'}>
        {/* tsParticles */}
        <div id="tsparticles">
            <Particles
                options={{
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
                }}
            />
        </div>
        { /* console.log('In Card-list prop1.cardsPropImg=>', prop1.cardsPropImg) */}
        { prop1.cardsProp1.map(
            cardElt => (
                <Card key={cardElt.id} cardProp2={cardElt}
                    cardProp3={prop1.cardsPropImg} />
            )
        )}
    </div>
);