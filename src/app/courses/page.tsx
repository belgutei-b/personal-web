import CustomParticles from "@/components/CustomParticles";

const terms = [
  {
    id: 4,
    term: "T2 2024",
    courses: [
      {
        code: "COMP9417",
        name: "Machine Learning and Data Mining",
      },
      {
        code: "COMP9517",
        name: "Computer Vision",
      },
      {
        code: "COMP3141",
        name: "Software System Design and Implementation",
      },
    ],
  },
  {
    id: 3,
    term: "T1 2024",
    courses: [
      {
        code: "COMP3411",
        name: "Artificial Intelligence",
      },
      {
        code: "COMP3891",
        name: "Extended Operating Systems",
      },
      {
        code: "COMP3331",
        name: "Computer Networks and Applications",
      },
    ],
  },
  {
    id: 2,
    term: "T3 2023",
    courses: [
      {
        code: "COMP1521",
        name: "Computer Systems Fundamentals",
      },
      {
        code: "COMP2511",
        name: "Object Oridented Design & Programming",
      },
      {
        code: "MATH3411",
        name: "Information, Codes and Ciphers",
      },
    ],
  },
  {
    id: 1,
    term: "T2 2023",
    courses: [
      {
        code: "COMP1531",
        name: "Software Engineering Fundamentals",
      },
      {
        code: "COMP2521",
        name: "Data Structures and Algorithms",
      },
      {
        code: "MATH1241",
        name: "Higher Mathematics 1B",
      },
    ],
  },
  {
    id: 0,
    term: "T1 2023",
    courses: [
      {
        code: "MATH1081",
        name: "Discrete Mathematics",
      },
      {
        code: "MATH1131",
        name: "Mathematics 1A",
      },
    ],
  },
];

export default function Courses() {
  const termsDiv = terms.map((term) => (
    <div key={term.id} className="flex mb-10 flex-1">
      <div className="border-r pr-8">
        <p className="text-pink-500 text-right text-2xl font-semibold hover:cursor-default">
          {term.term}
        </p>
      </div>
      <div className="pl-8">
        {term.courses.map((course) => (
          <div className="mb-4" key={course.code}>
            <div className="flex flex-row hover:cursor-default">
              <p className="text-custom-green mr-1 font-semibold">
                {course.code}:
              </p>
              <p className="text-white tracking-tight hover:text-orange-200">
                {course.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ));

  return (
    <div className="flex">
      <CustomParticles />
      <div className="flex flex-col mt-10 mx-auto">{termsDiv}</div>
    </div>
  );
}
