import { Container, Row, Col, Card } from "react-bootstrap";
import { educationHistory } from "./Data";

export default function Education() {
  return (
    <Container className="my-5">
      <h2 className="text-center">Education History</h2>
      <Row className="mt-4">
        {educationHistory.map((edu, index) => (
          <Col key={index} md={6} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={edu.src}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{edu.degree}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {edu.institution}
                </Card.Subtitle>
                <Card.Text>{edu.year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
