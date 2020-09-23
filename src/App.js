import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm';
import Quotes from './containers/Quotes'

import { connect } from 'react-redux'

class App extends Component {
  render() {

    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm addQuote={this.props.addQuote} />
        <Quotes delete={this.props.delete} upvoteQuote={this.props.upvoteQuote} decreaseVotes={this.props.decreaseVotes} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addQuote: quote => dispatch({ type: "ADD_QUOTE", quote }),
    delete: quoteId => dispatch({ type: "REMOVE_QUOTE", quoteId }),
    upvoteQuote: quoteId => dispatch({ type: "UPVOTE_QUOTE", quoteId }),
    decreaseVotes: quoteId => dispatch({ type: "DOWNVOTE_QUOTE", quoteId }),
  }
}


export default connect(null, mapDispatchToProps)(App);
