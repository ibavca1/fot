import {combineReducers} from 'redux';
import user from './user';
import page from './page';
import popups from './popups';

export default combineReducers({
  user,
  page,
  popups
});
