function findTopNames(students) {
    var topStudents = students.filter(function (Students) { return Students.score > 8; });
    var topNames = topStudents.map(function (Students) { return Students.name; });
    return topNames;
}
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
// รัชชาพร บัวนุช 660610790
