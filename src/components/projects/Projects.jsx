import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { projects } from "./Data";

export default function Projects() {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src={project.photo}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.duration}</Card.Text>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
