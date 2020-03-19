import React from 'react';
import './styles/App.css';
import About from './components/About.js';
import Gallery from './components/Gallery.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PlaceOrder from './components/PlaceOrder.js';
import ScrollableAnchor from 'react-scrollable-anchor';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect sticky="top" bg="light" expand="lg">
        <Navbar.Brand href="\" className="shadow-font">
          The Cookie Barne
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about" className="nav-links">
              About Us
            </Nav.Link>
            <Nav.Link href="#gallery" className="nav-links">
              Gallery
            </Nav.Link>
            <Nav.Link href="#order" className="nav-links">
              Place an Order
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1 className="headerImg">
        <div className="wrapper" />
      </h1>
      <br />
      <br />
      <ScrollableAnchor id={'about'}>
        <About />
      </ScrollableAnchor>
      <br />
      <br />
      <ScrollableAnchor id={'gallery'}>
        <Gallery />
      </ScrollableAnchor>
      <br />
      <br />
      <ScrollableAnchor id={'order'}>
        <PlaceOrder />
      </ScrollableAnchor>
    </div>
  );
}

export default App;
