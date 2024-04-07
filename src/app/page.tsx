"use client";
import CustomParticles from "@/components/CustomParticles";

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
  return (
    <div className="mt-14">
      <CustomParticles />
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
