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
function buttonHolidays() {
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
  
  colorHolidays.forEach((element) => {
    let verifyColor = element.style.backgroundColor;
    
    if (verifyColor !== "white") {
      element.style.backgroundColor = "white";
    } else {
      element.style.backgroundColor = "rgb(238, 238, 238)";
    }
  });
});


// Exercício 4: Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
function buttonFridays() {
  let btnContainer = document.querySelector(".buttons-container");
  let btnFridays = document.createElement("button");

  btnContainer.appendChild(btnFridays);
  btnFridays.id = "btn-friday";
  btnFridays.innerText = "Sexta-feira";
}

buttonFridays();


// Exercício 5: Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira.
let btnFridays = document.getElementById("btn-friday");
let fridayDays = [4, 11, 18, 25];

btnFridays.addEventListener("click", function () {
  let textFridays = document.querySelectorAll(".friday");
  
  for (let i = 0; i < textFridays.length; i += 1) {
    if (textFridays[i].innerHTML !== "Sextou :)") {
      textFridays[i].innerHTML = "Sextou :)"
    } else {
      textFridays[i].innerHTML = fridayDays[i];
    }
  }
});


// Exercício 6: Implemente duas funções que criem um efeito de "zoom".
function zoomIn(event) {
  event.target.style.fontSize = "30px";
}

function zoomOut(event) {
  event.target.style.fontSize = "20px";
}

let liDays = document.querySelectorAll(".days");

liDays.forEach((element) => {
  element.addEventListener("mouseover", zoomIn);
  element.addEventListener("mouseout", zoomOut);
});


// Exercício 7: Implemente uma função que adicione uma tarefa personalizada ao calendário.
function addTask(task) {
  let newTask = document.createElement("span");
  let myTasks = document.querySelector(".my-tasks");

  myTasks.appendChild(newTask);
  newTask.innerText = task;
}

addTask("Projeto Arte com Pixels");


// Exercício 8: Implemente uma função que adicione uma legenda com cor para a tarefa.
function addTaskColor(color) {
  let newColor = document.createElement("div");
  let myTasks = document.querySelector(".my-tasks");

  myTasks.appendChild(newColor);
  newColor.className = "task";
  newColor.style.backgroundColor = color;
}

addTaskColor("purple");


// Exercício 9: Implemente uma função que selecione uma tarefa.
let selectTaskColor = document.querySelector(".task");

function selected() {
  selectTaskColor.classList.toggle("task-selected");
  selectTaskColor.classList.toggle("task");
}

selectTaskColor.addEventListener("click", selected)


// Exercício 10: Implemente uma função que atribua a cor da tarefa ao dia do calendário.
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task-selected');
  let days = document.querySelector("#days");
  let taskDiv = document.querySelector(".task");
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener("click", function (event) {
    let verifyColor = event.target.style.color;

    if (selectedTask.length > 0 && verifyColor !== taskColor) {
      event.target.style.color = taskColor;
    } else {
      event.target.style.color = "rgb(119, 119, 119)";
    }
  });
}

setDayColor();