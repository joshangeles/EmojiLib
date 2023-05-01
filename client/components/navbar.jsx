/* eslint-disable no-console */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Import from './mobile-import';

export default function HomeNavbar({ onQuery, importText, handleShow }) {
  const [search, setSearch] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [results, setResults] = useState([]);
  const basePath = 'api/emojis/name/';

  function searchHandler(e) {
    e.preventDefault();

    fetch(basePath + search, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        setResults(data);
        onQuery(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map(size => (
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
                  <Nav.Link href="">Library</Nav.Link>
                  <Nav.Link onClick={handleShow}>Help</Nav.Link>
                </Nav>
                <Form
                className="d-flex"
                onSubmit={searchHandler}
                value={search}
                onChange={e => setSearch(e.target.value)}>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    required
                  />
                  <Button variant="outline-primary" type="submit">Search</Button>
                </Form>
                <Nav.Item style={{ marginTop: '125%' }} className='d-md-none' >
                  <Import importText={importText} />
                </Nav.Item>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}
