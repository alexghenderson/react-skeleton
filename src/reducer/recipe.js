import {handleActions} from 'redux-actions';
import {RECIPE_GET_START, RECIPE_GET_FINISH} from 'action/types';

export default handleActions({
  [RECIPE_GET_START]: (state, {payload}) => ({
    data: [...state.data],
    count: state.count,
    status: {
      lastRequest: payload.timestamp,
      inProgress: true,
      isError: false,
    },
  }),
  [RECIPE_GET_FINISH]: (state, {payload, error}) => ({
    data: error ? [...state.data] : [...payload.data],
    count: error ? state.count : payload.count,
    status: {
      lastRequest: state.status.lastRequest,
      inProgress: false,
      isError: error ? true : false,
    },
  }),
}, {
  data: [],
  count: 0,
  status: {
    lastRequest: 0,
    inProgress: false,
    isError: false,
  },
});
