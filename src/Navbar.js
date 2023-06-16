import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { useDownloadExcel } from 'react-export-table-to-excel';

import './Navbar.css';
import { useRef } from 'react';

function NavScrollExample() {

    const tableref = useRef(null)
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableref.current,
        filename:'user_info',
        sheet:'UserData'
    })

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Google Sheet Clone</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <NavDropdown.Divider />
                    <Form className='butform' style={{
                        display: 'flex',
                        flexDirection: 'column-reverse',
                    }}>
                    </Form>
                    <Form>
                        <button className='btn btn-outline-success' onClick={onDownload}>Download</button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;