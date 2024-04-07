"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const texts = [
  {
    id: 0,
    title: "About me",
    desription:
      "I love programming, especially Competitive Programming, Networking, Systems  and web development.",
  },
  {
    id: 1,
    title: "University",
    desription:
      "I study Computer Science at UNSW. On campus, I’m involved in CPMSoc and CSESoc.",
  },
  {
    id: 2,
    title: "Competitive Programming (CP)",
    desription:
      "I have been training competitive programming since I was 15. Currently, I am a Candidate master on Codeforces and solved over 2000 algorithms and data structure problems.",
  },
  {
    id: 3,
    title: "Achievements",
    desription:
      "I'm a 2x IOI participant, 2x 3rd place in IMC-Trading Advanced Programming Competition, and Top 100 in IEEEXtreme 24-hours competition.",
  },
];

const listItems = texts.map((text) => (
  <div
    key={text.id}
    className="relative mt-2 text-base w-10/12 rounded-2xl mb-4 group hover:cursor-default"
  >
    <p className="text-lg text-custom-green group-hover:text-custom-green-h font-medium uppercase">
      {text.title}
    </p>
    <p className="tracking-tight text-slate-400 group-hover:text-gray-50 transition">
      {text.desription}
    </p>
    <span className="absolute w-px -inset-y-3 left-[-1rem] bg-gradient-to-b from-black via-custom-green to-black opacity-0 group-hover:opacity-100 transition"></span>
  </div>
));

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="mt-14">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}

      {/* <div style={{position: "absolute", width:"100%", left: "0", height: "80vh"}}></div> */}
      <div className="mb-12 tracking-tighter max-w-prose block leading-relaxed hover:cursor-default">
        <div className="flex font-medium text-2xl mb-4">
          <p>printf("</p>
          <p className="text-pink-500">Hello World!</p>
          <p>"). I'm</p>
        </div>
        <div className="text-5xl font-semibold">
          <p className="inline-block">Belgutei Byambadorj</p>
          {/* <p className="inline-block text-pink-500">.</p> */}
          <span className="text-accent text-pink-500">.</span>
        </div>
      </div>
      <ul>{listItems}</ul>
    </div>
  );
}
