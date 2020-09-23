import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      return [...state.filter(quote => quote.id !== action.quoteId)]; //quote.id


    case 'UPVOTE_QUOTE':
      return [...state.map(quote => {
        if (quote.id === action.quoteId) {
          return { ...quote, votes: (quote.votes + 1) }
        };
        return quote;
      })];

    case 'DOWNVOTE_QUOTE': //should handle DOWNVOTE_QUOTE and decrement vote count down 1 if vote count is positive
      return state.map(quote => {
        if ((quote.id === action.quoteId) && (quote.votes !== 0)) {
          return { ...quote, votes: quote.votes - 1 }
        };
        return quote;
      });

    default:
      return state;
  }

}
