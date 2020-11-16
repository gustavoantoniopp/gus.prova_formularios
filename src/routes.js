import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Error from './pages/Error';

function Routes(){
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={LandingPage}></Route>
                    <Route path="*" component={Error}></Route>
                </Switch>
            </div>
        </Router>
    );
}
export default Routes;