import {SET_USER,SET_ERRORS,CLEAR_ERRORS,LOADING_UI,SET_AUTHENTICATED,SET_UNAUTHENTICATED} from '../types';
import axios from 'axios';
export const loginUser =(userData,history)=>(dispatch)=>
{
    dispatch({type:LOADING_UI});
    axios
        .post('/login',userData)
        .then(res=>{
            setAuthorizationHeader(res.data.token);    
            dispatch(getUserData());
            dispatch({type:CLEAR_ERRORS});
            history.push('/');
        })
        .catch((err)=>
            {
            dispatch({
                type:SET_ERRORS,
                payload:err.response.data
                    })
            })

}
export const signupUser =(newUerData,history)=>(dispatch)=>
{
    dispatch({type:LOADING_UI});
    axios
        .post('/signup',newUerData)
        .then(res=>{
            setAuthorizationHeader(res.data.token);            
            dispatch(getUserData());
            dispatch({type:CLEAR_ERRORS});
            history.push('/');
        })
        .catch((err)=>
            {
            dispatch({
                type:SET_ERRORS,
                payload:err.response.data
                    })
            })

}

export const logoutUser=()=>(dispatch)=>{
    localStorage.removeItem('FBToken');
    delete axios.defaults.headers.common['Authorization']
    dispatch({type:SET_UNAUTHENTICATED});
}
export const getUserData=()=>(dispatch)=>{
axios.get('/user')
.then(res=>{
    dispatch({
        type:SET_USER,
        payload:res.data
    })
}).catch(ERR=>
    console.log(ERR))
}
const setAuthorizationHeader=(token)=>
{
    const FBIdToken= `Bearer ${token}`
    localStorage.setItem('FBIdToken',FBIdToken);
    axios.defaults.headers.common['Authorization']=FBIdToken;
}