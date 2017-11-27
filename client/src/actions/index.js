import axios from 'axios';
import { FETCH_USER, LOGOUT_USER } from './types';
import { Redirect } from 'react-router-dom';

// if you return a function, reduxThunk will automatically pass in 'dispatch'
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data })
  };

export const logoutUser = () => async dispatch => {
  try {
    await axios.get('/api/logout');
    dispatch({ type: LOGOUT_USER });
  } catch (e) {
    throw Error(e);
  }
}
