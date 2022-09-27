const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
    return students.map((element, i) => ({
        name: element,
        average: (grades[i].reduce((a, b) => a + b) / grades[i].length),
    }));
}

console.log(studentAverage());
