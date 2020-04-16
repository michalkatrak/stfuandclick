import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Home} from './components/Home';
import {Race} from './components/Race';

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/:team' component={Race} />
                <Route path='/' component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
