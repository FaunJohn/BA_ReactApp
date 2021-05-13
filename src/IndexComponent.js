import React from "react";
import TestComponent from './TestComponent';
import ListComponent from './ListComponent';
import HomeComponent from "./HomeComponent";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function IndexComponent() {
    return (
        <Router>
            <div className="center">
                <nav>
                    <ul>
                        <li><Link to="/" className="App-link">Home</Link></li>
                        <li><Link to="/list" className="App-link">List</Link></li>
                        <li><Link to="/test" className="App-link">Test</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/list" component={ListComponent} />
                    <Route path="/test">
                        <Test />
                    </Route>
                    <Route path="/" component={HomeComponent} />
                </Switch>
            </div>
        </Router>
    );
}

function Test() {
    return <TestComponent name="Johannes" />;
}