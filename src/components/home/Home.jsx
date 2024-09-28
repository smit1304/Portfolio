import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { missionStatements } from "./Data";

export default function Home() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Welcome to My Portfolio</h1>
        {/* Carousel Component for Mission Statement Quotes */}
        <Carousel
          className="mt-4"
          interval={3000}
          pause="hover"
          controls={false}
        >
          {missionStatements.map((quote, index) => (
            <Carousel.Item key={index}>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "300px" }}
              >
                <h2>{quote.text}</h2>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="text-center mt-4">
        <Link to="/about">
          <Button variant="primary" size="lg">
            Know More About Me
          </Button>
        </Link>
      </div>
    </>
  );
}
