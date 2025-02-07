import { Container, Row, Col, Dropdown, ButtonGroup } from "react-bootstrap";
import { BsGrid, BsGrid3X3 } from "react-icons/bs";

const Welcome = () => {
  return (
    <Container fluid className="px-3 my-2">
      <Row className="d-flex justify-content-between text-light">
        <Col className="d-flex">
          <h2 className="mb-3">TV Shows</h2>
          <ButtonGroup className="ms-4 mt-1">
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                size="sm"
                className="rounded-0"
                style={{ backgroundColor: "transparent" }}
              >
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#">Comedy</Dropdown.Item>
                <Dropdown.Item href="#">Drama</Dropdown.Item>
                <Dropdown.Item href="#">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ButtonGroup>
        </Col>
        <Col className="d-flex justify-content-end">
          <BsGrid className="icons me-2" />
          <BsGrid3X3 className="icons" />
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
