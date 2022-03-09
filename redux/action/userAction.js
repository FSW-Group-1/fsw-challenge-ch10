import axios from "axios";
import { REQUEST_FINISHED, REQUEST_LOADING, GET_REQUEST } from "../types";

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
        console.log(data.data)
        //set localStorage here
        localStorage.setItem('accessToken', data.data.accessToken)
        dispatch({
            type: GET_REQUEST,
            payload: data.data
        })

        setTimeout(() =>{
          dispatch({
              type: REQUEST_FINISHED
          }) 
        }, 1000)
        // console.log('finished')
    } catch (error) {
        console.log(error.response.data.result)
    }
}


export default {
    loginUser
}