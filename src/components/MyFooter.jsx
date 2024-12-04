import { Button, Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const MyFooter = () => (
    <Container className="align-items-center">
      <Row className="mt-4">
        <Col className=" mb-2">
          <a>
            <Facebook className="ms-0 mx-2" />
          </a>
        </Col>

        <Col className=" mb-2">
          <a>
            <Instagram className="mx-2" />
          </a>
        </Col>

        <Col className=" mb-2">
          <a>
            <Twitter className="mx-2" />
          </a>
        </Col>
        <Col className=" mb-2">
          <a>
            <Youtube className="mx-2" />
          </a>
        </Col>
      </Row>
      <Row className="">
        <Col className="">
          <Row className="">
            <Col className="">
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Audio and Subtitles
                </a>
              </p>
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Media Center
                </a>
              </p>
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Privacy
                </a>
              </p>
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Contact us
                </a>
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="">
          <Row className="">
            <Col className="">
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Audio Description
                </a>
              </p>
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Investor Relations
                </a>
              </p>
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Legal Notices
                </a>
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="">
          <Row className="">
            <Col className="">
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Help Center
                </a>
              </p>
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Jobs
                </a>
              </p>
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Cookie Preferences
                </a>
              </p>
            </Col>
          </Row>
        </Col>
        <Col className="">
          <Row className="">
            <Col className="">
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Gift Cards
                </a>
              </p>
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Terms of Use
                </a>
              </p>
              <p>
                <a
                  className="text-light text-decoration-none"
                  href="#"
                  title="footer link"
                >
                  Corporate Information
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="">
        <Col className="">
          <Button type="button">Service Code</Button>
        </Col>
      </Row>
      <Row className="">
        <Col className="">N© 1997-2023 Netflix, Inc.</Col>
      </Row>
    </Container>
);

export default MyFooter;
