import Image from "next/image";

const texts = [
  {
    id: 0,
    title: "About me",
    desription:
      "I love programming, especially Competitive Programming, machine learning  and web development.",
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
];

const listItems = texts.map((text) => (
  <li key={text.id} className="mt-6 w-8/12 hover:bg-gray-800 rounded-2xl p-3">
    <p className="text-custom-green text-xl font-semibold">{text.title}</p>
    <p className="mt-1">{text.desription}</p>
  </li>
));

export default function Home() {
  return (
    <div className="mt-14">
      <div className="mb-12 tracking-tighter">
        <div className="flex font-medium text-xl mb-4">
          <p>printf("</p>
          <p className="text-pink-500">Hello World!</p>
          <p>"). I'm</p>
        </div>
        <div className="text-6xl font-semibold">
          <p className="inline-block">Belgutei Byambadorj</p>
          <p className="inline-block text-pink-500">.</p>
        </div>
      </div>
      <ul>{listItems}</ul>
    </div>
  );
}
