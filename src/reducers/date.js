import { SELECT_DATE } from '../actions';

// state = Date.today()
const date = (state = 'today', action) => {
  switch (action.type) {
    case SELECT_DATE:
      return action.date;
    default:
      return state;
  }
};

export default date;
