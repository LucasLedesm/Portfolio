import React from 'react'
import { Card, Button, CardGroup } from 'react-bootstrap'
import { BsFillArchiveFill } from 'react-icons/bs'
import { DiGithubAlt } from 'react-icons/di'

const Projects = () => {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="../marketplace.gif" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button href='https://github.com/LucasLedesm/Clase-20005/tree/main/clase9-10'target= "blank" variant="primary"><DiGithubAlt/>GitHub</Button>
        <Button href='https://covid19-form.vercel.app'target= "blank" variant="primary"><BsFillArchiveFill/>Demo</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../vacunaslucas.gif" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
          <Button href='https://github.com/LucasLedesm/Centro-de-Estetica-ZB'target= "blank" variant="primary"><DiGithubAlt/>GitHub</Button>
        <Button href='https://centro-de-estetica-zb.vercel.app/'target= "blank" variant="primary"><BsFillArchiveFill/>Demo</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="../zebrablu.gif" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Button href='https://github.com/LucasLedesm/Ecommerce-reactJs' target= "blank" variant="primary"><DiGithubAlt/>GitHub</Button>
        <Button href='https://ecommerce-react-js-mu.vercel.app'target= "blank" variant="primary"><BsFillArchiveFill/>Demo</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  )
}


export default Projects