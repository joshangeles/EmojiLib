import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function HomeNavbar() {

  function searchHandler() {

  }

  return (
    <div>
      {[false, 'sm', 'md', 'lg'].map(size => (
        <Navbar key={size} expand={size} className="mb-3 px-lg-5 bg-body-tertiary" bg="dark" variant="dark" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#">EmojiLib</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${size}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${size}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${size}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${size}`}>
                  EmojiLib
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body data-bs-theme="dark" className="bg-body-tertiary text-white">
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="login">Login</Nav.Link>
                  <Nav.Link href="library">Library</Nav.Link>
                  <Nav.Link href="help">Help</Nav.Link>
                  <Nav.Link href="Upload">Upload</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-primary" onSubmit={searchHandler}>Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
