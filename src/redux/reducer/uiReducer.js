import {SET_ERRORS,CLEAR_ERRORS,LOADING_UI,STOP_LOADING_UI,LOADING_UI_TEST, STOP_LOADING_UI_TEST} from '../types';

const initialState={
    loading:false,
    loadingTest: false,
    errors:null
};
export default function(state=initialState,action){
    switch(action.type){
        case SET_ERRORS:
            return {
                ...state,
                loading:false,
                loadingTest:false,
                errors:action.payload
            };
            case CLEAR_ERRORS:
                return{
                    ...state,
                    loading:false,
                    loadingTest: false,
                    errors:null
                }
            case LOADING_UI:
                return {
                    ...state,
                    loading:true
                }
            case LOADING_UI_TEST:
                return {
                    ...state,
                    loadingTest:true
                }
            case STOP_LOADING_UI_TEST:
                return {
                    ...state,
                    loadingTest:false
                }
            case STOP_LOADING_UI:
                return {
                    ...state,
                    loading:false
                }
            default:
                return state;
            }
}