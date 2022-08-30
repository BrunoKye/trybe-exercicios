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

// :rocket:

// Exercício 1: O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function calendarDays() {
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let ulDays = document.getElementById("days");
    let liDays = document.createElement("li");

    ulDays.appendChild(liDays);
    liDays.classList = "days";

    if (decemberDaysList[i] === 24 || decemberDaysList[i] === 25 || decemberDaysList[i] === 31){
        liDays.classList.add("holiday");
    }
    if (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18 || decemberDaysList[i] === 25) {
        liDays.classList.add("friday");
    }

    liDays.innerText = decemberDaysList[i];
  }
}

calendarDays();

// Exercício 2: Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
function buttonHolidays(Feriados) {
  let btnContainer = document.querySelector(".buttons-container");
  let btnHolidays = document.createElement("button");

  btnContainer.appendChild(btnHolidays);
  btnHolidays.id = "btn-holiday";
  btnHolidays.innerText = "Feriados";
}

buttonHolidays();

// Exercício 3: Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
let btnHolidays = document.getElementById("btn-holiday");

btnHolidays.addEventListener("click", function () {
  let colorHolidays = document.querySelectorAll(".holiday");
  let stateHolidays = false;
  
  colorHolidays.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});
