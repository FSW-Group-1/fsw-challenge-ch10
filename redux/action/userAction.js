import axios from "axios";
import { REQUEST_FINISHED, REQUEST_LOADING } from "../types";

const apiURL = 'https://fsw-challenge-ch10-api-dev.herokuapp.com/'
const loginUser = (data) => async dispatch => {
    try {
        dispatch({
            type: REQUEST_LOADING
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const{ data } = await axios.post()
        setTimeout(() =>{
            dispatch({
                type: REQUEST_FINISHED,
                payload: data
            })
        })
        //set localStorage here
    } catch (error) {
        
    }
}