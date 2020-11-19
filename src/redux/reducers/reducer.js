import { GET_TICKETS_FAILED, GET_TICKETS_REQUEST, GET_TICKETS_SUCCESS, SORTING_DURATION, SORTING_PRICE } from "../actionTypes"

const initialState = {
    isFetching: false,
    tickets: [],
    failed: false
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
            console.log('price');
            return {
                ...state,
                tickets: action.tickets.sort((a, b) => {
                    if (a.price > b.price) return 1;
                    if (a.price === b.price) return 0;
                    if (a.price < b.price) return -1;
                })
            }
        }
        case SORTING_DURATION: {
            console.log('durik');
            return {
                ...state,
                tickets: action.tickets.sort((a, b) => {
                    a = a.segments[0].duration + a.segments[1].duration;
                    b = b.segments[0].duration + b.segments[1].duration;
                    if (a > b) return 1;
                    if (a === b) return 0;
                    if (a < b) return -1;
                })
            }
        }
        default:
            return state;
    }
}

export default reducer;