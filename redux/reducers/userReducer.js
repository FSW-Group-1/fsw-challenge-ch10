import { REQUEST_FINISHED, REQUEST_LOADING } from "../types";

const initialState = [{
    user: []
}]

export default function(state = initialState, action){
    switch(action.type){
        case REQUEST_FINISHED:
            return{
                ...state,
                isLoading: false,
                user: action.payload
            }
        
            case REQUEST_LOADING:
                return{
                    ...state,
                    isLoading: true
                }
            
                default:
                    return state 
    }
}