const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const comparator = (right, student) => {
    if (right === student) {
        return 1;
    } 
    
    if (student === 'N.A') {
        return 0;
    } 

    return -0.5;
}

const hof = (right, student, callback) => {
    let count = 0;

    for (let i = 0; i < 10; i += 1) {
        count += callback(right[i], student[i]);
    }

    return `Resultado: ${count} pontos`;
}

console.log (hof(RIGHT_ANSWERS, STUDENT_ANSWERS, comparator));
