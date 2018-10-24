import React from 'react';
import {Switch, Route} from 'react-router-dom';

import TechStories from "../Stories";

const Router = props => (
    <Switch>
        <Route
            exact path="/"
            component={TechStories}
        />
        <Route
            exact path="/ars-technica"
            render={(props => <TechStories {...props} />)}
        />
        <Route
            exact path="/engadget"
            render={(props => <TechStories {...props} />)}
        />
        <Route
            exact path="/the-verge"
            render={(props => <TechStories {...props} />)}
        />
        <Route
            exact path="/recode"
            render={(props => <TechStories {...props} />)}
        />
        <Route
            exact path="/techradar"
            render={(props => <TechStories {...props} />)}
        />
    </Switch>
);

export default Router;