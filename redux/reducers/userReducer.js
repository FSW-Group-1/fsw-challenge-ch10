import { 
    REQUEST_FINISHED, REQUEST_LOADING, GET_REQUEST,
    LOGIN_FINISHED, LOGIN_REQUEST, LOGIN_FAILED, LOG_OUT, LOG_IN
     } from "../types";

const initialState = [{
    user: []
}]

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        
        case LOGIN_FINISHED:
            return{
                ...state,
                user: action.payload,
                isLoading: false,
                loggedIn: true
            }
        
        case LOG_IN:
            return{
                ...state,
                loggedIn: true
            }

        case LOG_OUT:
            return{
                ...state,
                loggedIn: false
            }

        case GET_REQUEST:
            return{
                ...state,
            }
        
        default:
            return state 
    }
}