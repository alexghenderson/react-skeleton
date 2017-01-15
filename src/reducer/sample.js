import {handleActions} from 'redux-actions';
import {SAMPLE_ACTION} from 'action/types';

export default handleActions({
  [SAMPLE_ACTION]: ({data}, {payload}) => ({
    data: payload ? [...data, payload] : [...data],
  }),
}, {
  data: [],
});
