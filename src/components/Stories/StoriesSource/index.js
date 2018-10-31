import React, {Component} from "react";
import {fetch} from "whatwg-fetch";

import StorieCard from "../StorieCard";

class StoriesSource extends Component {

    state = {
        stories: []
    };

    style = {
        zIndex:1000
    };

    componentDidMount() {
        const url = `${this.props.url}&sources=${this.props.source}&pageSize=15&page=1&language=en`;
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({stories: json.articles}))
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 text-center mb-4">
                        <div className="display-2" style={this.style}>{this.props.sourceName}</div>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    {this.state.stories.map(st => <StorieCard key={st.url} storie={st}/>)}
                </div>
            </div>
        );
    }
}

export default StoriesSource;