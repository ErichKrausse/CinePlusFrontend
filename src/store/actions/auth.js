import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () =>{
    return{
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = token =>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        token:token
    }
}

export const authFail = error =>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const logout = ()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate');
    return {
        type:actionTypes.AUTH_LOGOUT
    }

}
export const checkAuthTimeout = expirationTime =>{
    return dispatch =>{ 
        setTimeout(()=>{
            dispatch(logout());
        },expirationTime *1000)
    }
}
export const authLogin = (email,password) =>{
    return dispatch => { 
        dispatch(authStart());
        axios.post('https://localhost:5001/api/account/login',{
            Email:email,
            Password:password
        })
        .then(res => {
            const token = res.data.token
            const expirationDate = res.data.expiration
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            localStorage.setItem('user',email);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err=>{
            dispatch(authFail(err))
        })
    }
}
export const authSignup = (username,email,password1,password2) =>{
    return dispatch => { 
        dispatch(authStart());
        axios.post('https://localhost:5001/api/account/create',{
            Username:username,
            Email:email,
            Password:password1,
            Password2:password2
        })
        .then(res => {
            const token = res.data.token
            const expirationDate = res.data.expiration
            
            console.log(expirationDate)
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            localStorage.setItem('user',email);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err=>{
            dispatch(authFail(err))
        })
    }
}

export const authCheckState=()=>{
    return dispatch =>{
        const token = localStorage.getItem('token');
        if(token === undefined){
            dispatch(logout());
        }
        else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate<= new Date()){
                dispatch(logout());
            }
            else{
                dispatch(authSuccess(token))
                dispatch(checkAuthTimeout((expirationDate.getTime()-new Date().getTime())/1000));
            }
        }
    }
}