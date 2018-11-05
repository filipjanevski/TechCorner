import React, {Component} from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from "reactstrap";

import "./index.css";

class StorieCard extends Component {

    storie = this.props.storie;

    render() {
        return (
            <div className="col-md-4 mb-3">
                <Card className="styleCard">
                    <CardImg top width="100%"
                             src={this.storie.urlToImage}
                             alt="Card image cap"/>
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