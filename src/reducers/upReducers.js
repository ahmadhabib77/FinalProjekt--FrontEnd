import { USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL } from "../constants/upConstante";


function userSignupReducer(state={}, action) {
     switch(action.type) {
          case USER_SIGNUP_REQUEST:
               return {loading:true};
          case  USER_SIGNUP_SUCCESS:
               return {loading:false, userInfo: action.payload};
          case USER_SIGNUP_FAIL:
               return {loading:false, error: action.payload};

               default: return state;
     }
}
export {
     userSignupReducer
}//stor