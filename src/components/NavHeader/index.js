import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

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
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/" className='ml-4 mr-2'>Tech Corner!</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className='ml-2 mr-2'>
                                <NavLink href="/ars-technica">Ars Technica</NavLink>
                            </NavItem>
                            <NavItem className='ml-2 mr-2'>
                                <NavLink href="/engadget">Engadget</NavLink>
                            </NavItem>
                            <NavItem className='ml-2 mr-2'>
                                <NavLink href="/recode">Recode</NavLink>
                            </NavItem>
                            <NavItem className='ml-2 mr-2'>
                                <NavLink href="/techradar">TechRadar</NavLink>
                            </NavItem>
                            <NavItem className='ml-2 mr-2'>
                                <NavLink href="/the-verge">The Verge</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
