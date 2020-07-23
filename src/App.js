import React, { Component } from 'react';
import About from './components/AboutComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { INSTRUCTIONS } from './shared/instructions';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            instructions: INSTRUCTIONS,
        };
    }

  render() {
      return (
          <div className="App">
              <Header />
              <About instructions={this.state.instructions} />
              <Footer />
          </div>
      );
  }
}

export default App;
