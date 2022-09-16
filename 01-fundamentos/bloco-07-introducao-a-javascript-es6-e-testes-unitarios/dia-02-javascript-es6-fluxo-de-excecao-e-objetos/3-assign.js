const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const newKey = (obj, key, value) => obj[key] = value;
const objectKeys = obj => Object.keys(obj);
const objectLength = obj => Object.keys(obj).length;
const objectValues = obj => Object.values(obj);
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
const getValueByNumber = (obj, number) => Object.values(obj)[number];

function sumStudents() {
    const students1 = lesson1.numeroEstudantes;
    const students2 = lesson2.numeroEstudantes;
    const students3 = lesson3.numeroEstudantes;
    const result = students1 + students2 + students3;

    return result;
}

function verifyPair(obj, key, value) {
    const newArray = Object.entries(obj);
    let verify = false;

    for (let i = 0; i < newArray.length; i += 1) {
        if (newArray[i][0] === key && newArray[i][1] === value) {
            verify = true;
        }
    }
    
    return verify;
}

newKey(lesson2, 'turno', 'noite');
objectKeys(lesson1);
objectLength(lesson2);
objectValues(lesson3)
allLessons;
sumStudents();
getValueByNumber(lesson1, 0);
verifyPair(lesson2, 'turno', 'noite');
