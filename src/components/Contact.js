import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";

export const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.init("Fdw9Lui_H7KZO3dgw");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const replyTo = form.email.value;

    try {
      const response = await emailjs.send(
        "service_nrv7msg",
        "template_sni5m3m",
        {
          from_name: name,
          to_email: email,
          message: message,
          reply_to: replyTo,
        }
      );
      console.log("SUCCESS!", response.status, response.text);
      alert("Your message has been sent!");
    } catch (error) {
      console.log("FAILED...", error, error.text);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="name" placeholder="Name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          placeholder="Message"
                        ></textarea>
                        <button type="submit">
                          <span>Send</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
