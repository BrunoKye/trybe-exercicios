import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }
    default:
      return state;
  }
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_STATUS':
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline',
      }
    default:
      return state;
  }
};

const reducer = combineReducers({ themeReducer, statusReducer });
const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'TOGGLE_THEME' })
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'TOGGLE_STATUS' })
});

store.subscribe(() => {
  const state = store.getState();
  const body = document.querySelector('body');
  const status = document.getElementById('status');

  if (state.themeReducer.theme === 'light') {
    themeButton.innerText = 'Dark Mode';
    body.style.color = 'black';
    body.style.backgroundColor = 'white';
  } else {
    themeButton.innerText = 'Light Mode';
    body.style.color = 'white';
    body.style.backgroundColor = 'black';
  }

  if (state.statusReducer.status === 'online') {
    statusButton.innerText = 'Ficar Offline';
    status.innerText = 'Online';
  } else {
    statusButton.innerText = 'Ficar Online';
    status.innerText = 'Offline';
  }
});