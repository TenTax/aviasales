import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducer';

const reducers = combineReducers({
    ticketsReduce: reducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;