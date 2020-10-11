import React, { Component } from 'react';
import QuoteForm from "./components/QuoteForm"
import Quotes from "./containers/Quotes"
class App extends Component {

  handleLoop = () => {
    this.props.quotes.map(quote => quote)
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <QuoteForm/>
        <Quotes/>        
      </div>
    );
  }
}


export default App;
