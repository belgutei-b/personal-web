const terms = [
  {
    title: "T1 2025",
    courses: [
      "COMP6843: Extended Web Application Security and Testing",
      "PSYC1001: Psychology 1A",
    ],
  },
  {
    title: "T3 2024",
    courses: [
      "COMP3161: Concepts of Programming Languages",
      "COMP6841: Extended Security Engineering and Cyber Security",
      "COMP3222: Digital Circuits and Systems",
    ],
  },
  {
    title: "T2 2024",
    courses: [
      "COMP3141: Software System Design and Implementation",
      "COMP9517: Computer Vision",
    ],
  },
  {
    title: "T1 2024",
    courses: [
      "COMP3891: Extended Operating Systems",
      "COMP3331: Computer Networks and Applications",
      "COMP3411: Artificial Intelligence",
    ],
  },
  {
    title: "T3 2023",
    courses: ["COMP1521", "COMP2511", "MATH3411"],
  },
  {
    title: "T2 2023",
    courses: [
      "COMP2521: Computer Systems Fundamentals",
      "COMP1531: Software Engineering Fundamentals",
      "MATH1241: Higher Mathematics 1B",
    ],
  },
  {
    title: "T1 2023",
    courses: ["MATH1081: Discrete Mathematics", "MATH1131: Mathematics 1A"],
  },
];

export default function Page() {
  return (
    <div>
      {terms.map((term) => (
        <div key={term.title}>
          <div className="text-custom-green hover:text-custom-green-h">
            {term.title}
          </div>
          <div>
            {term.courses.map((course) => (
              <div className="text-stone-400" key={course}>
                {course}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
