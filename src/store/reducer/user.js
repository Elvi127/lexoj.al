import { LOGIN_USER, LOGOUT_USER } from '../actions/user';

const initialState = {
    logedUser: localStorage.getItem('user')
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOGIN_USER:
            localStorage.setItem('user', action.user);
            return{
                ...state,
                logedUser: localStorage.getItem('user')
            };
        case LOGOUT_USER:
            localStorage.removeItem('user');
            return{
                ...state,
                logedUser: localStorage.getItem('user')
            };
        default: return state;
    }
}