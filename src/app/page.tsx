"use client";

import { useEffect, useMemo, useState } from "react";
// https://github.com/tsparticles/react/#readme
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const texts = [
  {
    id: 0,
    title: "About me",
    desription:
      "I love programming, especially Competitive Programming, Networking, Systems and web development. I enjoy running & do callisthenics workouts.",
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
    className="relative mt-5 text-base w-10/12 rounded-2xl mb-4 group hover:cursor-default"
  >
    <p className="text-lg text-custom-green group-hover:text-custom-green-h font-medium uppercase">
      {text.title}
    </p>
    <p className="tracking-tight text-slate-300 group-hover:text-white transition text-spacing">
      {text.desription}
    </p>
    <span className="absolute w-px -inset-y-3 left-[-1rem] bg-gradient-to-b from-black via-custom-green to-black opacity-0 group-hover:opacity-100 transition"></span>
  </div>
));

export const particlesOptions = {
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
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#808080",
    },
    links: {
      color: "#808080",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: MoveDirection.none,
      enable: true,
      outModes: {
        default: OutMode.out,
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
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
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export default function Home() {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(() => particlesOptions, []);
  if (init) {
    return (
      <div className="mt-14 relative">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0 z-0"
        />
        <div className="px-4 md:px-0 mt-20 md:mt-0 mb-12 tracking-tighter leading-relaxed hover:cursor-default">
          <div className="flex font-medium text-xl md:text-2xl mb-4">
            <p>printf(&quot;</p>
            <p className="text-pink-500">Hello World!</p>
            <p>&quot;). I&apos;m</p>
          </div>
          <div className="text-5xl font-semibold flex flex-row">
            <div className="text-3xl md:text-5xl lg:text-6xl title-spacing">
              Belgutei Byambadorj<span className="text-pink-500 inline">.</span>
            </div>
          </div>
        </div>
        <div className="px-4 md:px-0">{listItems}</div>
      </div>
    );
  }
  return <div>Loading</div>;
}
