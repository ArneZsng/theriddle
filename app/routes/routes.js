'use strict';

import React from 'react';
import {Route, DefaultRoute, NotFoundRoute} from 'react-router';

import App from '../components/App.js';

//
// PUBLIC, ONLY ACCESSIBLE WHEN LOGED OUT
//

import Public     from '../components/public/Public';
import Home    from '../components/public/Home';
import Result    from '../components/public/Result';

const routes = (
    <Route name="app" handler={App}>
        <Route name="public" path="/" handler={Public}>
            <Route name="home" path="/" handler={Home}/>
            <Route name="result" path="/result" handler={Result}/>
        </Route>
    </Route>
);

export default routes;
