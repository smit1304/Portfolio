import { ProgressBar, Row, Col, Badge } from "react-bootstrap";
import { technicalSkills, softSkills, tools } from "./Data";

function Skills() {
  return (
    <div>
      <h2 className="mt-5">Technical Skills</h2>

      <div className="skills-badges mb-4">
        {technicalSkills.map((technicalSkill, idx) => (
          <Badge key={idx} pill variant="primary" className="mx-1">
            {technicalSkill.title}
          </Badge>
        ))}
      </div>
      <Row xs={1} md={2} className="g-4">
        {technicalSkills.map((technicalSkill, index) => (
          <Col md={6} className="mb-4" key={index}>
            <h4>{technicalSkill.title}</h4>
            <ProgressBar
              now={technicalSkill.experties}
              label={`${technicalSkill.experties}%`}
            />
          </Col>
        ))}
      </Row>

      <h2 className="mt-5">Soft Skills</h2>

      <div className="skills-badges mb-4">
        {softSkills.map((softSkill, idx) => (
          <Badge key={idx} pill variant="primary" className="mx-1">
            {softSkill.title}
          </Badge>
        ))}
      </div>
      <Row xs={1} md={2} className="g-4">
        {softSkills.map((softSkill, index) => (
          <Col md={6} className="mb-4" key={index}>
            <h4>{softSkill.title}</h4>
            <ProgressBar
              now={softSkill.experties}
              label={`${softSkill.experties}%`}
            />
          </Col>
        ))}
      </Row>

      <h2 className="mt-5">Tools And Framework</h2>

      <div className="skills-badges mb-4">
        {tools.map((tool, idx) => (
          <Badge key={idx} pill variant="primary" className="mx-1">
            {tool.title}
          </Badge>
        ))}
      </div>
      <Row xs={1} md={2} className="g-4">
        {tools.map((tool, index) => (
          <Col md={6} className="mb-4" key={index}>
            <h4>{tool.title}</h4>
            <ProgressBar now={tool.experties} label={`${tool.experties}%`} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Skills;
