export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId);
    case "UPVOTE_QUOTE":
      let foundUp = state.find(quote => quote.id === action.quoteId);
      let foundUpIndex = foundUp.index;
      return state.slice(
        0,
        foundUpIndex,
        Object.assign({}, foundUp, { votes: foundUp.votes++ }),
        state.slice(foundUpIndex + 1)
      );
    case "DOWNVOTE_QUOTE":
      let foundDown = state.find(quote => quote.id === action.quoteId);
      let foundDownIndex = foundDown.index;
      return foundDown.votes > 0
        ? state.slice(
            0,
            foundDownIndex,
            Object.assign({}, foundDown, { votes: foundDown.votes-- }),
            state.slice(foundDownIndex + 1)
          )
        : state;
    default:
      return state;
  }
};
