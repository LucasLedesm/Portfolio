import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row id="CalendarAbout" style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="colorText">Code</strong>
      </h1>
      <GitHubCalendar
        username="LucasLedesm"
        blockSize={15}
        blockMargin={5}
        color="#01ABDDff"
        fontSize={16}
      />
    </Row>
  );
}
export default Github;