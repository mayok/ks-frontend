import { combineReducers } from 'redux';
import recordsByDate from './recordsByDate';
import date from './date';

const rootReducer = combineReducers({
  recordsByDate,
  date,
});

export default rootReducer;
