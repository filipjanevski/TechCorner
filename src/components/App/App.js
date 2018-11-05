import React, {Component} from "react";

import NavHeader from "../NavHeader";
import NavFooter from "../NavFooter";

import Router from "../Router";

class App extends Component {
    render() {
        return (
            <div className="content">
                <NavHeader/>
                <div className="container mt-4 mb-4">
                    <Router/>
                </div>
                <NavFooter/>
            </div>
        );
    }
}

export default App;
