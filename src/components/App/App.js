import React, {Component} from "react";

import NavHeader from "../NavHeader";
import NavFooter from "../NavFooter";

import Router from "../Router";

import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="content">
                <NavHeader style={this.styleNav} />
                <div className="container mt-4 mb-4" style={this.styleContent}>
                    <Router/>
                </div>
                <NavFooter/>
            </div>
        );
    }
}

export default App;
