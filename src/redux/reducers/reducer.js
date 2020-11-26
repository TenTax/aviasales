import {
    GET_TICKETS_FAILED, GET_TICKETS_SUCCESS,
    SORTING_DURATION, SORTING_PRICE, NEXT_PAGE, SET_FETCHING,
    DEL_FETCHING,
    ADD_FILTER,
    DEL_FILTER
} from "../actionTypes"

const initialState = {
    tickets: [],
    sort: 'price',
    perPage: 20,
    pageCount: 1,
    isFetching: false,
    filter: [],


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
        case ADD_FILTER: {
            return {
                ...state,
                filter: state.filter.indexOf(+action.filter) === -1 ? [...state.filter, +action.filter] : [...state.filter]
            }
        }
        case DEL_FILTER: {
            const delItem = (filter) => {
                let newArray = [...state.filter];

                newArray.splice(newArray.indexOf(filter), 1)

                return newArray;
            }

            return {
                ...state,
                filter: delItem(+action.filter)
            }
        }
        default:
            return state;
    }
}

export default reducer;