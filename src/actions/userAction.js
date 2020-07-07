import axios from 'axios';
import Cookie from 'js-cookie';
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } from '../constants/userConstants';


// compress in signin:
const signin = (email, password) =>async (dispatch) => {
     dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});

try {
     const {data} = await axios.post("http://localhost:5000/api/users/signin", {email, password});
     dispatch({ type: USER_SIGNIN_SUCCESS, payload: data});
     Cookie.set('userInfo', JSON.stringify(data));
} catch (error) {
     dispatch({ type: USER_SIGNIN_FAIL, payload: error.message});
}
}//userConstant=>

export {signin};