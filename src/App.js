import React, { Component } from 'react';
import './App.css';
import Sentiment from 'sentiment';
import Footer from './footer';

const sentiment = new Sentiment()
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentimentScore: null,
      generalSentiment: null
    };
    this.findSentiment = this.findSentiment.bind(this);
  }
  findSentiment(event) {
    const result = sentiment.analyze(event.target.value)
    this.setState({
      sentimentScore: result.score
    })
    if (result.score < 0) {
      this.setState({
        generalSentiment: 'Negative'
      })
    }
    else if (result.score > 0) {
      this.setState({
        generalSentiment: 'Positive'
      })
    }
    else {
      this.setState({
        generalSentiment: 'Neutral'
      })
    }
  }
  render() {
    return (
      <>
        <div className="app-wrapper">
          <div className="app-inner-wrapper">
            <h2>TEXT SENTIMENT ANALYZER</h2>
            <p>Enter Text:</p>
            <textarea style={{height:"100px",width:"500px"}} onChange={this.findSentiment} />
            <p>Sentiment Score: {this.state.sentimentScore}</p>
            <p>General Sentimen: {this.state.generalSentiment}</p>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}

export default App;