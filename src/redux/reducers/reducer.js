import {
    GET_TICKETS_FAILED, GET_TICKETS_SUCCESS,
    SORTING_DURATION, SORTING_PRICE, NEXT_PAGE, SET_FETCHING,
    DEL_FETCHING
} from "../actionTypes"

const initialState = {
    tickets: [],
    sort: 'price',
    perPage: 20,
    pageCount: 1,

    isFetching: false,
    failed: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FETCHING:
            return {
                ...state,
                isFetching: true
            }

        case DEL_FETCHING:
            return {
                ...state,
                isFetching: false
            }

        case GET_TICKETS_SUCCESS:
            return {
                ...state,
                tickets: [...state.tickets].concat(action.tickets),
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
                sort: 'price',
                pageCount: 1
            }
        }
        case SORTING_DURATION: {
            return {
                ...state,
                sort: 'duration',
                pageCount: 1
            }
        }
        case NEXT_PAGE: {
            return {
                ...state,
                pageCount: action.pageCount + 1
            }
        }
        default:
            return state;
    }
}

export default reducer;