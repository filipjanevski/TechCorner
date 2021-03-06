import React, {Component} from "react";
import {fetch} from "whatwg-fetch";

import config from "../../../config/config";
import StorieCard from "../StorieCard";

class StoriesMain extends Component {

    state = {
        stories: []
    };

    componentDidMount() {
        const url = `${this.props.url}&sources=${config.sources}&pageSize=15&page=1&language=en`;
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({stories: json.articles}))
    }

    render() {
        return (
            <div className="row">
                {this.state.stories.map(st => <StorieCard key={st.url} storie={st}/>)}
            </div>
        );
    }
}

export default StoriesMain;