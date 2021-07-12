import React from 'react'
import { Navbar, Form, FormControl } from 'react-bootstrap'
import { Link } from "react-router-dom"

export default function Header({ setFilter }) {
    return (
        <div className="menuBar">
            <Navbar expand="xlg" bg="info" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Form inline>
                        <FormControl
                            type="text"
                            onChange={(e) => setFilter(e.target.value)}
                            placeholder="Search"
                            className="mr-sm-2" />
                        <Link color="red" to="/">Return Home</Link>
                        <Link to="/mycoins"> My PortFolio</Link>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
