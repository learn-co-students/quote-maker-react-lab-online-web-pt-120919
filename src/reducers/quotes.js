export default (state = [], action) => {
  let newState; 

  switch (action.type) {
    case 'ADD_QUOTE': 
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    // case 'REMOVE_QUOTE':
    //   let idx = state.findIndex(quote => quote.id === action.quoteId)
    //   return [...state.slice(0, idx), ...state.slice(idx + 1)]
    case 'UPVOTE_QUOTE': 
      newState = state.map(quote => {
        if (quote.id === action.quoteId) {
          return { ...quote, votes: quote.votes + 1}
        } else {
          return quote
        }
      })
      return newState;
    case 'DOWNVOTE_QUOTE': 
      newState = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          return { ...quote, votes: quote.votes - 1}
        } else {
          return quote
        }
      })
      return newState;
    default: 
      return state;
  }

}
