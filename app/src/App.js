import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import picture from './devmtnlogo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div class="welcomeLine">
            <h1>
                Welcome To The Another Page Brought To You By React
            </h1>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      
        <body>
          <div>
            <p class="quote">
              Remeber: It's not how many times you fall down, it's how many times you get back up
            </p>
          </div>
          <div>
            <button type="button">CLICK ME 2 GO NOWHERE</button>
          </div>

          <div>
            <a href="https://www.devmountain.com"><img class="dev" src={picture} alt="DevMountain Logo"/></a>
          </div>

        </body>

      </div>
    );
  }
}

export default App;
