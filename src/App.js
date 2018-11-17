import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import DocumentTitle from "react-document-title"

class App extends Component {
    render() {
        return (
            <DocumentTitle title="Finance - Home">
                <Router>
                    <div>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/register" component={LoginPage}/>
                    <Route path="/" exact component={HomePage}/>
                    </div>
                </Router>
            </DocumentTitle>
        );

    }
}

export default App;
