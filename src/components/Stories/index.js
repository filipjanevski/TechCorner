import React, {Component} from 'react';
import {Helmet} from "react-helmet";

import config from './config';
import {Logo} from '../../Logo';

import StoriesMain from "./StoriesMain";
import StoriesSource from "./StoriesSource";
import Intro from "../Intro";

class TechStories extends Component {

    state = {
        source: this.props.location.pathname.split('/')[1],
        sourceName: {
            'ars-technica': 'Ars Technica',
            'the-verge': 'The Verge',
            'recode': 'Recode',
            'techradar': 'TechRadar',
            'engadget': 'Engadget',
        }
    };

    newsFetchUrl = `https://newsapi.org/v2/everything?apiKey=${config.apikey}`;

    render() {
        if (this.props.location.pathname === '/') {
            const meta = [
                {name: 'author', content: "Filip Janevski"},
                {name: 'description', content: "All the tech news you will ever need in one place!"},

                {name: 'twitter:site', content: "Tech Corner! - Home"},
                {name: 'twitter:creator', content: "Filip Janevski"},
                {name: 'twitter:title', content: "Tech Corner!"},
                {name: 'twitter:image', content: Logo},

                {property: 'og:title', content: "Tech Corner! - Home"},
                {property: 'og:site_name', content: "Tech Corner!"},
                {property: 'og:type', content: "website"},
                {property: 'og:url', content: "https://tech-corner.netlify.com"},
                {property: 'og:description', content: "All the tech news you will ever need in one place!"},
                {property: 'og:image', content: Logo},

                {name: 'viewport', content: 'width=device-width, maximum-scale=1'},
            ];
            return (
                <div>
                    <Helmet title="Tech Corner! - Home" meta={meta}/>
                    <Intro/>
                    <StoriesMain url={this.newsFetchUrl}/>
                </div>
            );
        } else {
            const meta = [
                {name: 'author', content: "Filip Janevski"},
                {name: 'description', content: "All the tech news you will ever need in one place!"},

                {name: 'twitter:site', content: "Tech Corner! - " + this.state.sourceName[this.state.source]},
                {name: 'twitter:creator', content: "Filip Janevski"},
                {name: 'twitter:title', content: "Tech Corner!"},
                {name: 'twitter:image', content: Logo},

                {property: 'og:title', content: "Tech Corner! - " + this.state.sourceName[this.state.source]},
                {property: 'og:site_name', content: "Tech Corner!"},
                {property: 'og:type', content: "website"},
                {property: 'og:url', content: "https://tech-corner.netlify.com/" + this.state.source},
                {property: 'og:description', content: "All the tech news you will ever need in one place!"},
                {property: 'og:image', content: Logo},

                {name: 'viewport', content: 'width=device-width, maximum-scale=1'},
            ];
            return (
                <div>
                    <Helmet title={"Tech Corner! - " + this.state.source} meta={meta}/>
                    <StoriesSource url={this.newsFetchUrl} source={this.state.source}/>
                </div>
            )
        }
    }
}

export default TechStories;