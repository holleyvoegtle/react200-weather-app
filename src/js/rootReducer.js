import { combineReducers } from 'redux';
import searchReducer from './components/SearchBar/searchReducer'

const rootReducer = combineReducers({
// add reducers
    search: searchreducer,
});

export default rootReducer;
