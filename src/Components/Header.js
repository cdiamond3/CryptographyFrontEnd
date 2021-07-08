import React from 'react'
import { Navbar, Form, FormControl, Dropdown} from 'react-bootstrap'

export default function Header({ setFilter }) {
    return (
        <div className="menuBar">
            <Navbar >
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Form inline>
                    <FormControl
                        type="text"
                        onChange={(e) => setFilter(e.target.value)}
                        placeholder="Search"
                        className="mr-sm-2" />
                </Form>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item className="menuDrop" href="#/action-1">My PortFolio</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
        </div>
    )
}
