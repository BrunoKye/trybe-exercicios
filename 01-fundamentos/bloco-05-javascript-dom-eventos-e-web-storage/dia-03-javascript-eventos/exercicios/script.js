function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function dayHoli() {
    for (let i = 0; i < decemberDaysList.length; i += 1) {
        if (decemberDaysList[i] === (24 || 25 || 31)) {
            return 'holiday';
        }
    }
}

function daySun() {
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    if (decemberDaysList[i] === (4 || 11 || 18 || 25)) {
      return 'sunday';
    }
  }
}

function calendarDays() {
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let ulDays = document.getElementById("days");
    let liDays = document.createElement("li");

    ulDays.appendChild(liDays);
    liDays.classList = "days";

    if (dayHoli === "holiday") {
        liDays.classList.add("holiday");
    }
    if (daySun === "sunday") {
        liDays.classList.add("friday");
    }

    liDays.innerText = decemberDaysList[i];
  }
}

calendarDays();
