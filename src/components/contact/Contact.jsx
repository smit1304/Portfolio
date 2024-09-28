import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
function Contact() {
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    // Send form data to EmailJS
    emailjs
      .sendForm(
        "service_gl1yzor",
        "template_m25bv2r",
        e.target,
        "DPX2qNwZyIOFJdhUh"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully!");
          navigate("/");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred. Please try again.");
        }
      );

    e.target.reset(); // Clear the form after submission
  };

  return (
    <Container className="my-5">
      <h2 className="text-center">Contact Me</h2>

      <Row className="mt-4">
        <Col md={6}>
          <h4>Contact Information</h4>
          <p>
            <strong>Phone:</strong> +1 (289)623-3835
          </p>
          <p>
            <strong>Email:</strong> 13smitpatel@gmail.com
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/13-smitpatel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My LinkIn Profile
            </a>
          </p>
          <p>
            <strong>LeetCode:</strong>{" "}
            <a
              href="https://leetcode.com/u/smitpatel13/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My LeetCode Profile
            </a>
          </p>
        </Col>

        <Col md={6}>
          <h4>Send Me a Message</h4>
          <Form onSubmit={sendEmail}>
            <Form.Group controlId="formName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your First Name"
                name="user_firstname"
                required
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Last Name"
                name="user_lastname"
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                name="user_email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Contact</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Your Contact"
                name="user_contact"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your Message"
                name="message"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
