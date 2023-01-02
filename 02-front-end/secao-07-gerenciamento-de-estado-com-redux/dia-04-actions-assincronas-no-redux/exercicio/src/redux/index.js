import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import gameReducer from './reducers/gameReducer'

const store = createStore(
  gameReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
