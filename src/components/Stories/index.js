import React, {Component} from 'react';

import config from './config';

import StoriesMain from "./StoriesMain";
import StoriesSource from "./StoriesSource";

import DocumentMeta from 'react-document-meta';


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
            const meta = {
                title: `Tech Corner!`,
                description: 'Get all your tech news in one place!',
                canonical: `https://tech-corner.netlify.com`,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'tech,news,technology,mobile,smart'
                    }
                }
            };
            return (
                <DocumentMeta {...meta}>
                    <StoriesMain url={this.newsFetchUrl}/>
                </DocumentMeta>
            );
        } else {
            const meta = {
                title: `Tech Corner! - ${this.state.sourceName[this.state.source]}`,
                description: 'Get all your tech news in one place!',
                canonical: `https://tech-corner.netlify.com/${this.state.source}`,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'tech,news,technology,mobile,smart'
                    }
                }
            };
            return (
                <DocumentMeta {...meta}>
                    <StoriesSource url={this.newsFetchUrl} source={this.state.source}/>
                </DocumentMeta>
            )
        }
    }
}

export default TechStories;