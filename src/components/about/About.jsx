import { Container, Image, Button, Row, Col } from "react-bootstrap";
import "./about.css";
import Skills from "./Skills";
export default function About() {
  return (
    <Container className="my-5 text-center">
      <Image src="src/components/about/assets/Profile.jpg" roundedCircle />
      <h1>About Me</h1>
      <p className="lead">
        Hi, I am Smit Shantilal Patel, a Game Developer and Gamer. To be
        specific I like programming video game their gameplay, ai, verity of
        systems and so on. Playing them is my one of the hobby. If you like
        playing video games hit me up ! execpt video games I have very diverse
        music taste I am into almost all kinds of music. What is more, when it
        comes to reading books times flies for me. I can spend hours reading
        novels, mangas and other types of books even acedamics.
      </p>
      <Skills />
      <Row className="mt-4">
        <Col className="text-center">
          {/* Resume Download Button */}
          <a
            href="public/Smit Patel Resume.pdf"
            download="Smit Patel Resume.pdf"
          >
            <Button variant="primary" size="lg">
              Download My Resume
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
