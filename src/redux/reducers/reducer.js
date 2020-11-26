import { GET_TICKETS_FAILED, GET_TICKETS_SUCCESS, NEXT_PAGE, SORTING, FETCHING, SET_FILTER } from "../actionTypes"

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
        case FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case GET_TICKETS_SUCCESS:
            return {
                ...state,
                tickets: [...state.tickets].concat(action.tickets),
            }

        case GET_TICKETS_FAILED:
            return {
                ...state,
                failed: true
            }

        case SORTING:
            return {
                ...state,
                sort: action.sort,
                pageCount: 1
            }

        case NEXT_PAGE:
            return {
                ...state,
                pageCount: action.pageCount + 1
            }

        case SET_FILTER: {
            const toogleItem = (filter) => {
                let newArray = [...state.filter];

                if(newArray.indexOf(filter) !== -1) {
                    newArray.splice(newArray.indexOf(filter), 1)
                } else {
                    newArray.push(filter);
                }

                return newArray;
            }

            return {
                ...state,
                pageCount: 1,
                filter: toogleItem(+action.filter)
            }
        }

        default:
            return state;
    }
}

export default reducer;