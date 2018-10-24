import React, {Component} from 'react';

import config from './config';

import StoriesMain from "./StoriesMain";
import StoriesSource from "./StoriesSource";


class TechStories extends Component {

    state = {
        source: this.props.location.pathname.split('/')[1]
    };

    newsFetchUrl = `https://newsapi.org/v2/everything?apiKey=${config.apikey}`;

    render() {
        if (this.props.location.pathname === '/') {
            return (
                <StoriesMain url={this.newsFetchUrl}/>
            );
        } else {
            return (
                <StoriesSource url={this.newsFetchUrl} source={this.state.source}/>
            )
        }
    }
}

export default TechStories;