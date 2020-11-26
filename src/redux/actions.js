import Axios from "axios";
import { GET_TICKETS_FAILED, GET_TICKETS_SUCCESS, NEXT_PAGE, SORTING, FETCHING, SET_FILTER } from "./actionTypes";

export const setTickets = () => {
    return (dispatch) => {

        let data = {};

        dispatch({
            type: FETCHING,
            isFetching: true
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
                            type: FETCHING,
                            isFetching: false
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

export const sorting = (sort) => {
    return (dispatch) => {
        dispatch({
            type: SORTING,
            sort: sort
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

export const setFilter = (filter) => {
    return (dispatch) => {
        dispatch({
            type: SET_FILTER,
            filter: filter
        });
    }
}