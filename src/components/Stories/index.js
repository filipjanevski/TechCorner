import React, {Component} from "react";
import {Helmet} from "react-helmet";

import config from "../../config/config";
import {Logo} from "../../Logo";

import StoriesMain from "./StoriesMain";
import StoriesSource from "./StoriesSource";
import Intro from "../Intro";

class TechStories extends Component {

    state = {
        source: this.props.location.pathname.split("/")[1],
        sourceName: {
            "ars-technica": "Ars Technica",
            "the-verge": "The Verge",
            "recode": "Recode",
            "techradar": "TechRadar",
            "engadget": "Engadget",
        }
    };

    newsFetchUrl = `https://newsapi.org/v2/everything?apiKey=${config.apikey}`;

    render() {
        if (this.props.location.pathname === "/") {
            const meta = [
                {name: "viewport", content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1"},

                {name: "author", content: "Filip Janevski"},
                {name: "description", content: "All the tech news you will ever need in one place!"},
                {name: "keywords", content: "tech, tech news, news, smart, smartphone, internet, gadget"},

                {name: "twitter:card", content: "All the tech news you will ever need in one place!"},
                {name: "twitter:site", content: "@filipjanevsky"},
                {name: "twitter:creator", content: "@filipjanevsky"},
                {name: "twitter:description", content: "All the tech news you will ever need in one place!"},
                {name: "twitter:title", content: "Tech Corner! - Home"},
                {name: "twitter:image", content: Logo},

                {property: "og:title", content: "Tech Corner! - Home"},
                {property: "og:site_name", content: "Tech Corner!"},
                {property: "og:type", content: "website"},
                {property: "og:url", content: "https://tech-corner.netlify.com"},
                {property: "og:description", content: "All the tech news you will ever need in one place!"},
                {property: "og:image", content: Logo},
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
                {name: "viewport", content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=1"},

                {name: "author", content: "Filip Janevski"},
                {name: "description", content: "All the tech news you will ever need in one place!"},
                {name: "keywords", content: "tech, tech news, news, smart, smartphone, internet, gadget, " + this.state.sourceName[this.state.source]},

                {name: "twitter:card", content: "All the tech news you will ever need in one place!"},
                {name: "twitter:site", content: "@filipjanevsky"},
                {name: "twitter:creator", content: "@filipjanevsky"},
                {name: "twitter:description", content: "All the tech news you will ever need in one place!"},
                {name: "twitter:title", content: "Tech Corner! - " + this.state.sourceName[this.state.source]},
                {name: "twitter:image", content: Logo},

                {property: "og:title", content: "Tech Corner! - " + this.state.sourceName[this.state.source]},
                {property: "og:site_name", content: "Tech Corner!"},
                {property: "og:type", content: "website"},
                {property: "og:url", content: "https://tech-corner.netlify.com/" + this.state.source},
                {property: "og:description", content: "All the tech news you will ever need in one place!"},
                {property: "og:image", content: Logo},
            ];
            return (
                <div>
                    <Helmet title={"Tech Corner! - " + this.state.sourceName[this.state.source]} meta={meta}/>
                    <StoriesSource url={this.newsFetchUrl} source={this.state.source}
                                   sourceName={this.state.sourceName[this.state.source]}/>
                </div>
            )
        }
    }
}

export default TechStories;