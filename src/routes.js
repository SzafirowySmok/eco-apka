import React from 'react';
import {Route} from 'react-router';
import Navigation from './components/navigation.component';
import Home from './containers/home.container.component'
export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home} />
    </Route>
);
