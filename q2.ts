interface Students  {
  name : string;
  score : number;
}


function findTopNames(students) {
  const topStudents = students.filter(Students => Students.score > 8);

  const topNames = topStudents.map(Students => Students.name);

  return topNames;
}


const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;

// รัชชาพร บัวนุช 660610790
