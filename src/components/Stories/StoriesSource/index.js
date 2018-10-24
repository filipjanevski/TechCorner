import React, {Component} from 'react';
import {fetch} from "whatwg-fetch";

import StorieCard from "../StorieCard";

class StoriesSource extends Component {

    state = {
        stories: []
    };

    componentDidMount() {
        const url = `${this.props.url}&sources=${this.props.source}&pageSize=15&page=1&language=en`;
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({stories: json.articles}))
    }

    render() {
        return (
            <div className='row'>
                {this.state.stories.map(st => <StorieCard storie={st}/>)}
            </div>
        );
    }
}

export default StoriesSource;