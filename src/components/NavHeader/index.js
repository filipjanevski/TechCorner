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
                <Navbar color="transparent" light expand="md" className="navback onTopEl">
                    <NavbarBrand href="/" className="ml-4 mr-2 styleLink">Tech Corner!</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className="ml-2 mr-2">
                                <NavLink href="/" className="styleLink">Home</NavLink>
                            </NavItem>
                            <NavItem className="ml-2 mr-2">
                                <NavLink href="/ars-technica" className="styleLink">Ars Technica</NavLink>
                            </NavItem>
                            <NavItem className="ml-2 mr-2">
                                <NavLink href="/engadget" className="styleLink">Engadget</NavLink>
                            </NavItem>
                            <NavItem className="ml-2 mr-2">
                                <NavLink href="/recode" className="styleLink">Recode</NavLink>
                            </NavItem>
                            <NavItem className="ml-2 mr-2">
                                <NavLink href="/techradar" className="styleLink">TechRadar</NavLink>
                            </NavItem>
                            <NavItem className="ml-2 mr-2">
                                <NavLink href="/the-verge" className="styleLink">The Verge</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div className="navb"> </div>
            </div>
        );
    }
}
