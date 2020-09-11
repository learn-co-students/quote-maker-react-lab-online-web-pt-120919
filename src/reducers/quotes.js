// export default (state = [], action) => {
//   return state;
// }

function quotesReducer(state = [], action) {
  let idx
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
 
    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    case "UPVOTE_QUOTE":
      return action.quote.votes + 1  
 
    default:
      return state;
  }
}

export default quotesReducer