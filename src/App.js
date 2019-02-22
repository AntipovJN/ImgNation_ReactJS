import React, { Component } from 'react';

import Header from "./BigBlocks/Header/Header/Header";
import MainPageContent from "./BigBlocks/MainPageContent/MainPageContent";


class App extends Component {
  render() {
    return (

        <div className="App">
        <Header/>
        <MainPageContent/>
      </div>

    );
  }
}

export default App;
