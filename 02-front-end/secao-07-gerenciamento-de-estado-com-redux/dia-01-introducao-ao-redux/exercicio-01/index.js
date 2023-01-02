import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const changeColor = (state = INITIAL_STATE, action) => {
  const { index, colors } = state;

  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: index === colors.length - 1 ? 0 : index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: index === 0 ? colors.length - 1 : state.index - 1,
      };
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      };
    default:
      return state;
  }
};

const store = createStore(changeColor, composeWithDevTools());

const btnNext = document.getElementById('next');
const btnPrevious = document.getElementById('previous');
const btnRandom = document.getElementById('random');

btnNext.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});

btnPrevious.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

btnRandom.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' });
});

store.subscribe(() => {
  const { colors, index } = store.getState();

  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
});
