import React from 'react'
import Github from "../../components/Github/Github";

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
import { SiFigma } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiGoogle } from "react-icons/si";


import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const About = () => {
  return (
    <div id='AboutPage'>
      <Container>
      <Row>
        <Col>
          <h1 className='Title'><strong className='colorText'>Professional</strong> Skillset</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3} className="bn5 Card-Tech"><DiCss3 /></Col>
        <Col xs={6} md={3} className="Card-Tech"><DiBootstrap /></Col>
        <Col xs={6} md={3} className="Card-Tech"><DiGithubAlt /></Col>
        <Col xs={6} md={3} className="Card-Tech"><DiGit /></Col>

        <div className="w-100"></div>

        <Col xs={6} md={3} className="Card-Tech"><DiSass /></Col>
        <Col xs={6} md={3} className="Card-Tech"><DiFirebase /></Col>
        <Col xs={6} md={3} className="Card-Tech"><DiJavascript1 /></Col>

        <div className="w-100"></div>

        
        <Col xs={6} md={3} className="Card-Tech"><DiHtml5 /></Col>
        <Col xs={6} md={3} className="Card-Tech"><DiNodejsSmall /></Col>
        <Col xs={6} md={3} className="Card-Tech"><DiReact /></Col>
      </Row>
      <Row>
        <Col>
          <h1 className='Title'><strong className='colorText'>Tools</strong> I use</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3} className="bn5 Card-Tech"><SiFigma /></Col>
        <Col xs={6} md={3} className="Card-Tech"><SiVisualstudio /></Col>
        <Col xs={6} md={3} className="Card-Tech"><SiPostman /></Col>
        <Col xs={6} md={3} className="Card-Tech"><SiGoogle /></Col>
        
      </Row>
      <Github/>
    </Container>
    
    </div>
  )
}

export default About