import axios from "axios";
import { REQUEST_FINISHED, REQUEST_LOADING } from "../types";

const apiURL = 'https://fsw-challenge-ch10-api-dev.herokuapp.com/api'
const configJSON = {
    headers: {
        'Content-Type': 'application/json'
    }
}
const loginUser = (dataUser) => async dispatch => {
    try {
        dispatch({
            type: REQUEST_LOADING
        })

        const{ data } = await axios.post(`${apiURL}/login`, dataUser, configJSON)
        console.log(data.data.accessToken)
        //set localStorage here
        // localStorage.setItem('accessToken')
        setTimeout(() =>{
            dispatch({
                type: REQUEST_FINISHED,
                payload: data.data
            })
        })
    } catch (error) {
        
    }
}


export default {
    loginUser
}