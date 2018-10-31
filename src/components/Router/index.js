import React from "react";
import {Switch, Route} from "react-router-dom";

import TechStories from "../Stories";
import Privacy from "../Privacy";
import Terms from "../Terms";

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
        <Route
            exact path="/privacy"
            component={Privacy}
        />
        <Route
            exact path="/terms"
            component={Terms}
        />
    </Switch>
);

export default Router;