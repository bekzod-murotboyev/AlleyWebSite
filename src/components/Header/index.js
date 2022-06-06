import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container className="py-3  px-5" fluid>
          <Navbar.Brand href="#">
            <img
              src="https://adiblarxiyoboni.netlify.app/assets/icons/logo.svg"
              alt=""
              className="w-100"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav className="d-flex" style={{ fontSize: "20px" }}>
              <Nav.Link href="#action1" className="py-1 px-3">
                Asosiy
              </Nav.Link>
              <Nav.Link href="#action2" className="py-1 px-3">
                Yangiliklar
              </Nav.Link>
              <Nav.Link href="#action3" className="py-1 px-3">
                Kitoblar
              </Nav.Link>
              <Nav.Link href="#action4" className="py-1 px-3">
                Rasmlar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
