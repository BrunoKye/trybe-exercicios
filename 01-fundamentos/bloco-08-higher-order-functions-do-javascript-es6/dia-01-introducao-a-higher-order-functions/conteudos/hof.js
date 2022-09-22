const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = action => {
    const result = action();
    console.log(result);
}

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);
