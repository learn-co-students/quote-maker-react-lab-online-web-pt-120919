import { combineReducers } from 'redux';
import quotes from './quotes';
import uuid from 'uuid';

export default combineReducers({
  quotes
});

// const rootReducer = combineReducers({
//   quotes: quotesReducer
// });
 
// export default rootReducer;

function quotesReducer(state = [], action) {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
 
    // case "REMOVE_BOOK":
    //   idx = state.findIndex(book => book.id  === action.id)
    //   return [...state.slice(0, idx), ...state.slice(idx + 1)];
 
    default:
      return state;
  }
}
