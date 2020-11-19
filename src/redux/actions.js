import Axios from "axios";
import { GET_TICKETS_FAILED, GET_TICKETS_REQUEST, GET_TICKETS_SUCCESS, SORTING_DURATION, SORTING_PRICE } from "./actionTypes";

export const setTickets = () => {
    return (dispatch) => {

        let data = {};

        dispatch({
            type: GET_TICKETS_REQUEST
        });

        Axios.get('https://front-test.beta.aviasales.ru/search')
            .then(res => {
                data = res.data;
                getTickets();
            })

        const getTickets = () => {
            const state = data;
            Axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${state.searchId}`)
                .then(res => {
                    dispatch({
                        type: GET_TICKETS_SUCCESS,
                        tickets: res.data.tickets,
                        stop: res.data.stop
                    })
                })
                .catch(err => {
                    dispatch({
                        type: GET_TICKETS_FAILED
                    })
                });
        }
    }
}

export const sortingPrice = (tickets) => {
    return (dispatch) => {
        dispatch({
            type: SORTING_PRICE,
            tickets: tickets
        });
    }
}

export const sortingDuration = (tickets) => {
    return (dispatch) => {
        dispatch({
            type: SORTING_DURATION,
            tickets: tickets
        });
    }
}