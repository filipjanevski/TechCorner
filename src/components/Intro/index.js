// To be implemented
import React, {Component} from 'react';
import './index.css';
import {Logo} from '../../Logo';

class Intro extends Component {
    render() {
        return (
            <div className="mb-4">
                <div className="navb"></div>
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