import Axios from "axios";
import { GET_TICKETS_FAILED, GET_TICKETS_SUCCESS, NEXT_PAGE, SORTING_DURATION, SORTING_PRICE, SET_FETCHING, DEL_FETCHING } from "./actionTypes";

export const setTickets = () => {
    return (dispatch) => {

        let data = {};

        dispatch({
            type: SET_FETCHING
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
                    if (!res.data.stop) {
                        dispatch({
                            type: GET_TICKETS_SUCCESS,
                            tickets: res.data.tickets,
                            stop: res.data.stop
                        })
                        getTickets();
                    } else {
                        dispatch({
                            type: DEL_FETCHING
                        })
                    }
                })
                .catch(err => {
                    getTickets();
                    dispatch({
                        type: GET_TICKETS_FAILED
                    })
                });
        }
    }
}

export const sortingPrice = () => {
    return (dispatch) => {
        dispatch({
            type: SORTING_PRICE
        });
    }
}

export const sortingDuration = () => {
    return (dispatch) => {
        dispatch({
            type: SORTING_DURATION
        });
    }
}

export const nextPage = (pageCount) => {
    return (dispatch) => {
        dispatch({
            type: NEXT_PAGE,
            pageCount: pageCount
        });
    }
}