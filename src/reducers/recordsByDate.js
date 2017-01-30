import { REQUEST_RECORD, RECEIVE_RECORD } from '../actions';

const records = (state = {
  isFetching: false,
  didInvalidate: false,
  items: [],
}, action) => {
  switch (action.type) {
    case REQUEST_RECORD:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_RECORD:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.records,
        lastUpdated: action.lastUpdated,
      };
    default:
      return state;
  }
};

const recordsByDate = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_RECORD:
    case RECEIVE_RECORD:
      return {
        ...state,
        [action.date]: records(state[action.date], action),
      };
    default:
      return state;
  }
};

export default recordsByDate;
