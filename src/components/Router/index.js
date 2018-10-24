import React from 'react';
import {Switch, Route} from 'react-router-dom';

import TechStories from "../Stories";

const Router = () => (
    <Switch>
        <Route
            exact path="/"
            component={TechStories}
        />
        <Route
            exact path="/ars-technica"
            component={(props => <TechStories {...props} />)}
        />
        <Route
            exact path="/engadget"
            component={(props => <TechStories {...props} />)}
        />
        <Route
            exact path="/the-verge"
            component={(props => <TechStories {...props} />)}
        />
        <Route
            exact path="/recode"
            component={(props => <TechStories {...props} />)}
        />
        <Route
            exact path="/techradar"
            component={(props => <TechStories {...props} />)}
        />
    </Switch>
);

export default Router;