import CustomParticles from "@/components/CustomParticles";

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

export default function Home() {
  return (
    <div className="mt-14">
      <CustomParticles />
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
