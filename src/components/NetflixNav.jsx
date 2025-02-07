import { Container, Nav, Navbar } from "react-bootstrap";
import { BsSearch, BsBell, BsPersonCircle } from "react-icons/bs";

const MyNav = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="./src/assets/logo.png" style={{ width: "70px", height: "40px" }} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#" className="fw-bold active">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                Movies
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                My List
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center text-light">
              <BsSearch className="icons" />
              <div id="kids" className="fw-bold ms-3">
                KIDS
              </div>
              <BsBell className="icons ms-3" />
              <BsPersonCircle className="icons ms-3" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
