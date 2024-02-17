import Link from "next/link";

const terms = [
  {
    id: 3,
    term: 'T1 2024',
    courses: [
      {
        code: 'COMP3411',
        name: 'Artificial Intelligence'
      },
      {
        code: 'COMP3891',
        name: 'Extended Operating Systems'
      },
      {
        code: 'COMP3331',
        name: 'Computer Networks and Applications'
      }
    ]
  },
  {
    id: 2,
    term: 'T3 2023',
    courses: [
      {
        code: 'COMP1521',
        name: 'Computer Systems Fundamentals'
      },
      {
        code: 'COMP2511',
        name: 'Object Oridented Design & Programming'
      },
      {
        code: 'MATH3411',
        name: 'Information, Codes and Ciphers'
      }
    ]
  },
  {
    id: 1,
    term: 'T2 2023',
    courses: [
      {
        code: 'COMP1531',
        name: 'Software Engineering Fundamentals'
      },
      {
        code: 'COMP2521',
        name: 'Data Structures and Algorithms'
      },
      {
        code: 'MATH1241',
        name: 'Higher Mathematics 1B'
      },
    ]
  },
  {
    id: 0,
    term: 'T1 2023',
    courses: [
      {
        code: 'MATH1081',
        name: 'Discrete Mathematics'
      },
      {
        code: 'MATH1131',
        name: 'Mathematics 1A'
      },
    ]
  }
]

export default function Courses() {
  const listItems = terms.map((term) => (
    <li key={term.id} className="flex w-full mb-10">
      <div className="border-r pr-8 ">
        <p className="text-custom-pink text-right text-2xl font-semibold">{term.term}</p>
      </div>
      <div className="pl-8 ">
        {term.courses.map((course) => (
          <div className="mb-4" key={course.code}>
            <Link href={`/courses/${course.code}`} className="flex">
              <p className="text-custom-green mr-1 font-semibold">{course.code}:</p>
              <p className="text-white hover:text-orange-200">{course.name}</p>
            </Link>
          </div>
        ))}
      </div>
      
    </li>
  ));

  return (
    <div className="flex">
      <div className="w-2/12"></div>
      <div className="flex mt-10">
        <ul className="w-full">{listItems}</ul>
      </div>
      <div className="w-2/12"></div>
    </div>
  )
}