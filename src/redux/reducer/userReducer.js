import {SET_USER,SET_AUTHENTICATED as SetAuthenticated,SET_UNAUTHENTICATED as SetUnauthenticated,LIKE_SCREAM,UNLIKE_SCREAM,MARK_NOTIFICATIONS_READ} from '../types';
const initialState={
    authenticated:false,
    credentials:{},
    likes:[],
    notifications:[],
    
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
        case LIKE_SCREAM:
            return {
                ...state,
                likes:[
                    ...state.likes,
                    {
                        userHandle:state.credentials.handle,
                        screamId:action.payload.screamId
                    }
                ]
            }
        case UNLIKE_SCREAM:
            return {
                ...state,
                likes:state.likes.filter(
                    (like)=>like.screamId!==action.payload.screamId
                    )
            };
        case MARK_NOTIFICATIONS_READ:
            state.notifications.forEach((not)=>(not.read=true));
            return {
                ...state
            };
        default:
                return state;
        }
}