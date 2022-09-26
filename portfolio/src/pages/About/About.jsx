import React from 'react'

import { DiBootstrap } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiGithubAlt } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiFirebase } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiSass } from "react-icons/di";

import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const About = () => {
  return (
    <Container classNameName='AboutPage'>
      <Row>
        <Col>
        <h1 className='Title'>Professional Skillset</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={2} className="bn5 Card-Tech"><DiCss3 /></Col>
        <Col xs={4} md={2} className="Card-Tech"><DiBootstrap /></Col>
        <Col xs={4} md={2} className="Card-Tech"><DiGithubAlt /></Col>
        <Col xs={4} md={2} className="Card-Tech"><DiGit /></Col>
        <Col xs={4} md={2} className="Card-Tech"><DiSass /></Col>
        <div className="w-100"></div>
        <Col xs={4} md={2} className="Card-Tech"><DiFirebase /></Col>
        <Col xs={4} md={2} className="Card-Tech"><DiJavascript1 /></Col>
        <Col xs={4} md={2} className="Card-Tech"><DiHtml5 /></Col>
        <Col xs={4} md={2} className="Card-Tech"><DiNodejsSmall /></Col>
        <Col xs={4} md={2} className="Card-Tech"><DiReact /></Col>
      </Row>
      <Row>
        <Col>
        <h1 className='Title'>Tools I use</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={4} md={2} className="bn5 Card-Tech"><DiCss3 /></Col>
        <Col xs={4} md={2} className="Card-Tech"><DiBootstrap /></Col>
        <Col xs={4} md={2} className="Card-Tech"><DiGithubAlt /></Col>
        <Col xs={4} md={2} className="Card-Tech"><DiGit /></Col>
      </Row>
    </Container>
  )
}

export default About