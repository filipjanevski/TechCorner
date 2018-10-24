import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';

class StorieCard extends Component {

    storie = this.props.storie;

    style = {
        height: 600
    };

    styleBtnLink = {
        'text-decoration': 'none',
        color: 'white',
    };

    styleBtn = {
        position: "absolute",
        bottom: 10
    }

    render() {
        return (
            <div className="col-md-4 mb-3">
                <Card style={this.style}>
                    <CardImg top width="100%"
                             src={this.storie.urlToImage}
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>{this.storie.title}</CardTitle>
                        <CardSubtitle>Author: {this.storie.author}</CardSubtitle>
                        <CardText>{this.storie.content}</CardText>
                        <Button color="info" style={this.styleBtn}><a href={this.storie.url} style={this.styleBtnLink}>Read More</a></Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default StorieCard;