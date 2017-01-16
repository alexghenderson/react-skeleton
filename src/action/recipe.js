
/* global setTimeout */
import {RECIPE_GET_START, RECIPE_GET_FINISH} from './types';
import {createAction} from 'redux-actions';

const getStart = createAction(RECIPE_GET_START);
const getFinish = createAction(RECIPE_GET_FINISH);

const get = () => {
  return (dispatch) => {
    dispatch(getStart({timestamp: new Date().getTime()}));
    // Set up a 1 second delay to simulate network latency
    setTimeout(() => {
      fetch('sample/items.json')
        .then((resp) => (resp.json()))
        .then((resp) => {
          dispatch(getFinish(resp));
        })
        .catch((resp) => {
          dispatch(getFinish(resp));
        });
    }, 1000);
  };
};

export const fakeError = () => {
  return (dispatch) => {
    dispatch(getStart({timestamp: new Date().getTime()}));
    // Set up a 1 second delay to simulate network latency
    setTimeout(() => {
      fetch('sample/fakeUrl.json')
        .then((resp) => (resp.json()))
        .then((resp) => {
          dispatch(getFinish(resp));
        })
        .catch((resp) => {
          dispatch(getFinish(resp));
        });
    }, 1000);
  };
};

export default get;
