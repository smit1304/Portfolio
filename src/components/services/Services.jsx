import { Container, Card, Row, Col } from "react-bootstrap";
import { services } from "./Data";
export default function Services() {
  return (
    <Container className="my-5">
      <h1 className="text-center">My Services</h1>

      <Row className="mt-4">
        {services.map((service, index) => (
          <Col md={6} className="mb-4" key={index}>
            {/* <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card> */}

            <Card className="h-100">
              <Card.Img
                variant="top"
                src={service.src}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
