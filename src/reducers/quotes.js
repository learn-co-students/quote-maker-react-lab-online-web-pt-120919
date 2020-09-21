export default (state = [], action) => {
  let idx;
  let quote;

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);

    case "UPVOTE_QUOTE":
      return state;

    case "DOWNVOTE_QUOTE":
      return state;

    default:
      return state;
  }
};
