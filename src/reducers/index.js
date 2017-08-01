import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import podcasts from './reducer_podcasts';

const rootReducer = combineReducers({
  podcasts
});

export default rootReducer;
