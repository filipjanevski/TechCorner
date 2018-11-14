import React, {Component} from "react";
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from "reactstrap";

import ProgressiveImage from "react-progressive-image";

import "./index.css";

class StorieCard extends Component {

    storie = this.props.storie;

    render() {
        return (
            <div className="col-md-4 mb-3">
                <Card className="styleCard">
                    <ProgressiveImage src={this.storie.urlToImage} placeholder={this.storie.urlToImage+'?w=200&h=200'}>
                        {src => <img src={src} alt={this.storie.title} />}
                    </ProgressiveImage>
                    <CardBody>
                        <CardTitle>{this.storie.title}</CardTitle>
                        <CardSubtitle><small>Author: {this.storie.author}</small></CardSubtitle>
                        <hr/>
                        <CardText>{this.storie.content.substring(0,200)}...</CardText>
                        <a href={this.storie.url} className="btn btn-dark styleBtnLink">Read Full Story</a>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default StorieCard;