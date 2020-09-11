// export default (state = [], action) => {
//   return state;
// }

function quotesReducer(state = [], action) {
  let idx
  let quote 
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
 
    case "REMOVE_QUOTE":
      idx = state.findIndex(quote => quote.id  === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    
    case 'UPVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx];
      console.log(quote)
      return [
        ...state.slice(0, idx),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(idx + 1)
      ];

    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId);
      quote = state[idx];
      if (quote.votes > 0) {
        return [
          ...state.slice(0, idx),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(idx + 1)
        ];
      }
      return state;

    default:
      return state;
  }
}

export default quotesReducer

// idx = state.findIndex(quote => quote.id === action.quoteId);
// User avatar
// Matteo Piccini 13 MINUTES AGO
// what will that line do?
// Olesya Miller 13 MINUTES AGO
// it finds the index of the quote?
// User avatar
// User avatar
// Matteo Piccini 13 MINUTES AGO
// perfect
// User avatar
// Matteo Piccini 12 MINUTES AGO
// we'll probably need it when we do our slicing and build the new array
// User avatar
// Matteo Piccini 12 MINUTES AGO
// then: quote = state[idx];
// User avatar
// Matteo Piccini 12 MINUTES AGO
// what does that line do?
// Olesya Miller 12 MINUTES AGO
// saves the quote we are looking for in a variable
// User avatar
// Olesya Miller 12 MINUTES AGO
// ?
// User avatar
// User avatar
// Matteo Piccini 12 MINUTES AGO
// So now that we have both index and quote, we are ready for our slice and re-build :smile:
// User avatar
// Matteo Piccini 11 MINUTES AGO
// we only want to update the quote and leave the rest as is
// User avatar
// Matteo Piccini 11 MINUTES AGO
// ...state.slice(0, idx) this code will slice up until the quote in question, right?
// Olesya Miller 10 MINUTES AGO
// right
// User avatar
// User avatar
// Matteo Piccini 9 MINUTES AGO
// great, so all the quotes before the quote in question are left untouched
// User avatar
// Matteo Piccini 9 MINUTES AGO
// time now to update the votes (+1) for the quote we upvoted:
// User avatar
// Matteo Piccini 9 MINUTES AGO
// Object.assign({}, quote, { votes: quote.votes += 1 })
// User avatar
// Matteo Piccini 9 MINUTES AGO
// how does this code work?
// Olesya Miller 8 MINUTES AGO
// not sure
// User avatar
// User avatar
// Matteo Piccini 8 MINUTES AGO
// do you remember how Object.assign works in general?
// User avatar
// Matteo Piccini 8 MINUTES AGO
// if not no worries, quick Google search and then we talk about it
// Olesya Miller 5 MINUTES AGO
// it's used for cloning an obect
// User avatar
// Olesya Miller 5 MINUTES AGO
// object
// User avatar
// User avatar
// Matteo Piccini 5 MINUTES AGO
// yup
// User avatar
// Matteo Piccini 4 MINUTES AGO
// so the first argument {} says what type of object to copy into
// User avatar
// Matteo Piccini 4 MINUTES AGO
// answers the where
// User avatar
// Matteo Piccini 4 MINUTES AGO
// second argument quote, answers the what question. What do we copy
// User avatar
// Matteo Piccini 3 MINUTES AGO
// and the third argument?
// Olesya Miller 3 MINUTES AGO
// what we need to change in the object we are copying?
// User avatar
// User avatar
// Matteo Piccini 3 MINUTES AGO
// awesome!
// User avatar
// Matteo Piccini 3 MINUTES AGO
// so we change the property votes
// User avatar
// Matteo Piccini 2 MINUTES AGO
// and the value will be the previous value quote.votes incremented by 1
// User avatar
// Matteo Piccini 2 MINUTES AGO
// now that we updated the votes of the element we upvoted
// User avatar
// Matteo Piccini 2 MINUTES AGO
// the only thing left to do is to copy untouched the remaining elements aaafter the one we edited
// User avatar
// Matteo Piccini 2 MINUTES AGO
// ...state.slice(idx + 1)
// User avatar
// Matteo Piccini A MINUTE AGO
// and this will be our new state, a copy of the previous, with one element that got updated :smile:
// User avatar
// Matteo Piccini A MINUTE AGO
// Does it make more sense now?