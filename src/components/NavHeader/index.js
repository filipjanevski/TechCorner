import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";

import "./index.css";

export default class NavHeader extends React.Component {

    style = {
        color: "#3d2d3d",
    };

    onTopEl = {
        zIndex: 1000
    };

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="transparent" light expand="md" style={this.onTopEl} className="navback">
                    <NavbarBrand href="/" className="ml-4 mr-2" style={this.style}>Tech Corner!</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className="ml-2 mr-2">
                                <NavLink href="/" style={this.style} active={true}>Home</NavLink>
                            </NavItem>
                            <NavItem className="ml-2 mr-2">
                                <NavLink href="/ars-technica" style={this.style}>Ars Technica</NavLink>
                            </NavItem>
                            <NavItem className="ml-2 mr-2">
                                <NavLink href="/engadget" style={this.style}>Engadget</NavLink>
                            </NavItem>
                            <NavItem className="ml-2 mr-2">
                                <NavLink href="/recode" style={this.style}>Recode</NavLink>
                            </NavItem>
                            <NavItem className="ml-2 mr-2">
                                <NavLink href="/techradar" style={this.style}>TechRadar</NavLink>
                            </NavItem>
                            <NavItem className="ml-2 mr-2">
                                <NavLink href="/the-verge" style={this.style}>The Verge</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div className="navb"> </div>
            </div>
        );
    }
}
