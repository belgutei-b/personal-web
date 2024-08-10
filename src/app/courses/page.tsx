const terms = [
  {
    title: "T3 2024",
    courses: ["COMP3161", "COMP6841", "COMP3222"],
  },
  {
    title: "T2 2024",
    courses: ["COMP3141", "COMP9517"],
  },
  {
    title: "T1 2024",
    courses: ["COMP3891", "COMP3331", "COMP3411"],
  },
  {
    title: "T3 2023",
    courses: ["COMP1521", "COMP2511", "MATH3411"],
  },
  {
    title: "T2 2023",
    courses: ["COMP2521", "COMP1531", "MATH1241"],
  },
  {
    title: "T1 2023",
    courses: ["MATH1081", "MATH1131"],
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
