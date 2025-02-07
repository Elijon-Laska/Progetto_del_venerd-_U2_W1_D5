import { Container, Row, Col, Button } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-bg-dark text-start mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
              <Col className="mt-2">
                <div className="footer-links">
                  <p>
                    <BsFacebook className="footer-icon me-2" />
                    <BsInstagram className="footer-icon me-2" />
                    <BsTwitterX className="footer-icon me-2" />
                    <BsYoutube className="footer-icon" />
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Contact us
                    </a>
                  </p>
                  <Button variant="secondary" size="sm" className="footer-button rounded-0 mt-3 bg-dark">
                    Service Code
                  </Button>
                  <p className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</p>
                </div>
              </Col>
              <Col className="mt-5">
                <div className="footer-links">
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Legal Notices
                    </a>
                  </p>
                </div>
              </Col>
              <Col className="mt-5">
                <div className="footer-links">
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Cookie Preferences
                    </a>
                  </p>
                </div>
              </Col>
              <Col className="mt-5">
                <div className="footer-links">
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="#" alt="footer link" className="text-light no-underline">
                      Corporate Information
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
