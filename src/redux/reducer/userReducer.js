import {SET_USER,SET_ERRORS,CLEAR_ERRORS,LOADING_UI,SET_AUTHENTICATED as SetAuthenticated,SET_UNAUTHENTICATED as SetUnauthenticated} from '../types';
const initialState={
    authenticated:false,
    credentials:{},
    likes:[],
    notifications:[]
};
export default function(state=initialState,action){
    switch(action.type){
        case SetAuthenticated:
            return {
                ...state,
                authenticated:true
            };
      //change check
            case SetUnauthenticated:
            return initialState;
        case SET_USER:
            return {
                authenticated:true,
                ...action.payload
            };
            default:
                return state;
        }
}