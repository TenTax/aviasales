import { GET_TICKETS_FAILED, GET_TICKETS_REQUEST, GET_TICKETS_SUCCESS, SORTING_DURATION, SORTING_PRICE } from "../actionTypes"

const initialState = {
    isFetching: false,
    tickets: [],
    failed: false,
    sort: 'duration'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TICKETS_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case GET_TICKETS_SUCCESS:
            return {
                ...state,
                tickets: action.tickets,
                isFetching: false
            }

        case GET_TICKETS_FAILED: {
            return {
                ...state,
                failed: true
            }
        }
        case SORTING_PRICE: {
            return {
                ...state,
                sort: 'price'
            }
        }
        case SORTING_DURATION: {
            return {
                ...state,
                sort: 'duration'
            }
        }
        default:
            return state;
    }
}

export default reducer;