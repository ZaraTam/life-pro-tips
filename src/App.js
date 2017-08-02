import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header"> 
          <h1>Life Pro Tips of the moment</h1>
          <i className="fa fa-lightbulb-o logo" aria-hidden="true"></i>
        </div>

        <div className="App-search">
          <form className="search-bar">
            <i className="fa fa-search search-icon"></i>
            <input type="text" />            
          </form>
          <button className="button" type="submit">Search</button>
          <button className="button" type="submit">I'm feeling lucky</button>
        </div>

        <footer className="App-footer">
          <p>Powered by <a href="https://www.reddit.com/r/LifeProTips/" target="_blank">LifeProTips</a> and <a href="https://www.reddit.com/r/ShittyLifeProTips/" target="_blank">ShittyLifeProTips</a></p>
        </footer>
         
        <div className="Zara">
          <p>
            Made by Zara Tam
            <ul>
              <li><a href="http://zaratam.com" target="_blank"><i className="fa fa-home socialmedia" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/in/zaratam" target="_blank"><i className="fa fa-linkedin-square socialmedia" aria-hidden="true"></i></a></li>
              <li><a href="https://twitter.com/zaratam" target="_blank"><i className="fa fa-twitter-square socialmedia" aria-hidden="true"></i></a></li>
              <li><a href="https://www.facebook.com/zara.tam" target="_blank"><i className="fa fa-facebook-square socialmedia" aria-hidden="true"></i></a></li>
              <li><a href="https://github.com/zaratam/" target="_blank"><i className="fa fa-github-square socialmedia" aria-hidden="true"></i></a></li>
            </ul>
          </p>
        </div>

      </div>
    );
  }
}

export default App;