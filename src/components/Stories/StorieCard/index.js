import React, {Component} from "react";
import {Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg} from "reactstrap";

import "./index.css";

class StorieCard extends Component {

    storie = this.props.storie;

    render() {
        return (
            <div className="col-md-4 mb-3">
                <Card className="styleCard">
                    <CardImg top width="100%" height="200px" src={this.storie.urlToImage} alt={this.storie.title}/>
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