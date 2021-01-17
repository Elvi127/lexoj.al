import { DISPLAY_NOTIFICATION, REMOVE_NOTIFICATION} from '../actions/notification';

const initialState = {
    active: false,
    message: '',
    priority: '',
}

export default ( state = initialState, action) => {
    switch(action.type){
        case DISPLAY_NOTIFICATION:
            return{
                active: true,
                message: action.notification.message,
                priority: action.notification.priority,
            }
        case REMOVE_NOTIFICATION:
            return{
                active: false,
            }
        default: return state;
    }
}