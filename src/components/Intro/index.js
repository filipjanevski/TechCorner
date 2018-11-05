import React, {Component} from "react";

import {Logo} from "../../Logo";

import "./index.css";

class Intro extends Component {
    render() {
        return (
            <div className="mb-4">
                <div className="row text-center">
                    <div className="col-md-12">
                        <img src={Logo} alt="Tech Corner! Logo"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;