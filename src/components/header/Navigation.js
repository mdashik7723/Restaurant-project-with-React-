 import React, {Component} from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, collapse } from 'reactstrap';
 import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return(
            <div>
                <Navbar dark color="dark">
                    <div className="container"><NavbarBrand href="/"> Ashik's Restaurant</NavbarBrand></div>
                </Navbar>
                <Nav className="mr-auto" navbar>
                    <nanItem>
                        <Link to = "/" className = "nav-link active" >Home</Link>
                    </nanItem>
                    <nanItem>
                        <Link to = "/menu" className = "nav-link active" >Menu</Link>
                    </nanItem>
                    <nanItem>
                        <Link to = "/about" className = "nav-link active" >About</Link>
                    </nanItem>
                    <nanItem>
                        <Link to = "/contact" className = "nav-link active" >Contact</Link>
                    </nanItem>
                </Nav>
            </div>
        );
    }
}


export default Navigation;