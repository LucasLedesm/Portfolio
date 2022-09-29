import React from 'react'
import { Container ,Row, Col, Card, Button } from 'react-bootstrap'
import { BsFillArchiveFill } from 'react-icons/bs'
import { DiGithubAlt } from 'react-icons/di'

const Projects = () => {
  return (
    <Container className='ProjectIPage'>
      <Row>
        <Col className='TittleProjects'>
        <h1>My Recents <bold className='colorText'>Works</bold></h1>
        <h4>
        Here are a few projets I've <bold className='colorText'>Worked</bold> on recently
        </h4>
        </Col>
      </Row>
      <Row id='Projects'>
        <Col xs={12} md={3}>
        <Card id='CardPr' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className='CardBodyPr'>
        <Card.Title>Ecommerce ReactJs</Card.Title>
        <Card.Text>
        This "Ecommerce" was made with React and Firebase
        </Card.Text>
        <Button href='https://github.com/LucasLedesm/Ecommerce-reactJs' target= "blank" variant="primary"><DiGithubAlt/>GitHub</Button>
        <Button href='https://ecommerce-react-js-mu.vercel.app'target= "blank" variant="primary"><BsFillArchiveFill/>Demo</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} md={3}>
        <Card id='CardPr' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>ZebraBlu Stetic Center</Card.Title>
        <Card.Text>
          This was my first web page made with Html, Css, Javascript, Boostrap and Sass
        </Card.Text>
        <Button href='https://github.com/LucasLedesm/Centro-de-Estetica-ZB'target= "blank" variant="primary"><DiGithubAlt/>GitHub</Button>
        <Button href='https://centro-de-estetica-zb.vercel.app/'target= "blank" variant="primary"><BsFillArchiveFill/>Demo</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={12} md={3}>
        <Card id='CardPr' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Covid vaccination form</Card.Title>
        <Card.Text>
        This web page was created with html, css, bootstrap and vanilla javascript
        </Card.Text>
        <Button href='https://github.com/LucasLedesm/Clase-20005/tree/main/clase9-10'target= "blank" variant="primary"><DiGithubAlt/>GitHub</Button>
        <Button href='https://covid19-form.vercel.app'target= "blank" variant="primary"><BsFillArchiveFill/>Demo</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default Projects