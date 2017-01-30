import fetch from 'isomorphic-fetch';

export const REQUEST_RECORD = 'REQUEST_RECORD';
export const RECEIVE_RECORD = 'RECEIVE_RECORD';
export const SELECT_DATE = 'SELECT_DATE';

export const requestRecord = date => ({
  type: REQUEST_RECORD,
  date,
});

export const receiveRecord = (date, json) => ({
  type: RECEIVE_RECORD,
  records: json,
  receivedAt: Date.now(),
  date,
});

export const selectDate = date => ({
  type: SELECT_DATE,
  date,
});

export function fetchRecord(date) {
  return (dispatch) => {
    dispatch(requestRecord(date));
    return fetch('http://localhost:8080/') // fetch from backend
      .then(response => response.json())
      .then(json => dispatch(receiveRecord(date, json)));
  };
}
