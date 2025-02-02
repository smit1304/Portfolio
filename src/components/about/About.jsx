import { Container, Image, Button, Row, Col } from "react-bootstrap";
import "./about.css";
import Skills from "./Skills";
export default function About() {
  return (
    <Container className="my-5 text-center">
      <Image src="Profile.jpg" roundedCircle />
      <Image src="" roundedCircle />
      <h1>About Me</h1>
      <p className="lead">
        Hi, I'm Smit Patel, a software developer with a passion for game
        development and creative problem-solving. I blend my Computer
        Engineering background with ongoing Game Programming studies to craft
        engaging digital experiences. From developing AI-driven game mechanics
        to engineering full-stack applications, I transform complex challenges
        into elegant solutions. Currently based in Toronto, I'm always excited
        to take on new technical challenges that push the boundaries of what's
        possible.
      </p>
      <Skills />
      <Row className="mt-4">
        <Col className="text-center">
          {/* Resume Download Button */}
          <a href="Smit Patel Resume.pdf" download="Smit Patel Resume.pdf">
            <Button variant="primary" size="lg">
              Download My Resume
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
