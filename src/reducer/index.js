import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import sample from './sample';
import recipe from './recipe';

export default combineReducers({
  sample,
  recipe,
  routing: routerReducer,
});
