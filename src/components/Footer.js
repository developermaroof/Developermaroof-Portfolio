import { Container, Row, Col } from "react-bootstrap";
import linkedIn from "../assets/img/linkedIn.svg";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="maroof">{"< Maroof />"}</div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/developermaroof"
              >
                <img src={linkedIn} alt="linkedInIcon" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/developermaroofpage"
              >
                <img src={facebook} alt="facebookIcon" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/developer_maroof"
              >
                <img src={instagram} alt="instagramIcon" />
              </a>
            </div>
            <p>&copy; developermaroof. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
