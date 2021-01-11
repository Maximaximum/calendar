import { combineReducers } from 'redux';
import loggedReducer from './isLogged';
import eventsReducer from './events';

const allReducers = combineReducers({
  isLogged: loggedReducer,
  events: eventsReducer
});

export default allReducers;