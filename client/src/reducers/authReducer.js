import { FETCH_USER, LOGOUT_USER } from '../actions/types';

// const initialState = {

// }
export default (state=null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case LOGOUT_USER:
      return false;
    default:
      return state;
  }
}
