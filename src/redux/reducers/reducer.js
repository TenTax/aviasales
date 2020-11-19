import { GET_TICKETS_FAILED, GET_TICKETS_REQUEST, GET_TICKETS_SUCCESS } from "../actionTypes"

const initialState = {
    isFetching: false,
    tickets: [],
    failed: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
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
        default:
            return state;
    }
}

export default reducer;