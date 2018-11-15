import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
class App extends Component {
  render() {
    return(
        <Router>
            <div>
            <Route path="/" exact component={LoginPage} />
            <Route path="/login"  component={LoginPage} />
            <Route path="/register"  component={LoginPage} />
            </div>
        </Router>
    );

  }
}

export default App;
